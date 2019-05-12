import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Platform,
  StyleSheet,
} from 'react-native';

import Voice from 'react-native-voice';
import { voice } from './component/theme'
import { HOST_SERVER } from './component/constants';

var SQLite = require('react-native-sqlite-storage')
var db = undefined
if (Platform.OS === 'ios') {
  db = SQLite.openDatabase({name: 'guide.181116.v1', createFromLocation: 1})
} if (Platform.OS === 'android') {
  db = SQLite.openDatabase({name: 'guide.181116.v1', createFromLocation: '~guide.db'})
}

export default class LocGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      pitch: '',
      error: '',
      end: '',
      started: '',
      results: [],
      partialResults: [],
      brandList: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
    this.setBrandList = this.setBrandList.bind(this)
    this.navigate = this.navigate.bind(this)
    this.voiceTrigger = this.voiceTrigger.bind(this)
    this.resetState = this.resetState.bind(this)
    this._startRecognizing = this._startRecognizing.bind(this)
    this._stopRecognizing = this._stopRecognizing.bind(this)
    this.writeDB = this.writeDB.bind(this);
    this.createPosition = this.createPosition.bind(this);
    this.insertData = this.insertData.bind(this);
    this.getData = this.getData.bind(this);

    this.writeDB();
    console.log('Location Guide constructor');
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  }

  onSpeechEnd(e) {
    this.setState({
      end: '√',
    });
    if (Platform.OS === 'ios') {
      this.setBrandList()
    }
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error),
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value,
      finalResults: Platform.OS === 'ios'?e.value:[],
    });
    if (Platform.OS === 'android') {
      this.setBrandList()
    }
  }

  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value,
      finalResults: Platform.OS === 'android'?e.value:[],
    });
  }

  onSpeechVolumeChanged(e) {
    this.setState({
      pitch: e.value,
    });
  }

  async _startRecognizing(e) {
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
    try {
      await Voice.start('zh-TW');
    } catch (e) {
      console.error(e);
    }
  }

  async _stopRecognizing(e) {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }

  async _cancelRecognizing(e) {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }

  async _destroyRecognizer(e) {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });
  }

  resetState() {
    this.state = {
      recognized: '',
      pitch: '',
      error: '',
      end: '',
      started: '',
      results: [],
      partialResults: [],
      brandList: [],
      finalResults: [],
    };
  }

  voiceTrigger() {
    let { started } = this.state
    if (started === '') {
      this._startRecognizing()
    } else {
      this._stopRecognizing()
      this.setState({
        started: '',
      })
    }
  }

  setBrandList() {
    let { end, partialResults, results } = this.state
    if (end == '') return
    let brand = []

    if (Platform.OS === 'ios') {
      brand = partialResults
      this.setState({
        finalResults: results
      })
    } if (Platform.OS === 'android') {
      brand = results
      this.setState({
        finalResults: partialResults
      })
    }

    let str_in = brand.map((result, index)=> '"' + result + '"').toString()
    let str_like = brand.map((result, index)=> 'brandEqual like "%' + result + '%"').toString().replace(/,/g, " or ")
    
    db.transaction((tx) => {
      tx.executeSql('SELECT district, brand, districtEqual, blockEqual ' 
        + 'FROM tb_position where brand in (' + str_in + ') '
        + ' or (' + str_like + ')'
        + 'group by district, brand, districtEqual, blockEqual', [], (tx, results) => {
        var len = results.rows.length;
        let brandList = []
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          brandList.push(row);
        }
        console.log("brandList:", brandList)
        this.setState({
          brandList: brandList,
        })

        setTimeout(() => this.navigate(), 1000)
      });
    });
  }

  writeDB() {
    let url = HOST_SERVER + 'position/list';
    fetch(url, {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.createPosition();
      responseJson.forEach((data) => {
        this.insertData(data);
      });
    })
  }

  createPosition() {
    db.transaction((tx) => {
      tx.executeSql("DROP TABLE IF EXISTS Position");

      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Position( " +
          "id INTEGER PRIMARY KEY NOT NULL, " +
          "block TEXT NOT NULL" +
          ");",
          [],
          (tx, results) => {
            console.log(results);
          }
      );
    })
  }

  insertData(data) {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Position (id, block) VALUES (?,?) ",
          [data.id, data.block],
          (tx, results) => {
            console.log(results);
          }
      );
    })
  }

  getData(id) {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Position where id = ? ",
          [id],
          (tx, results) => {
            console.log('get Data');
            console.log(results);
            for (let i = 0; i < results.rows.length; i++) {
              let row = results.rows.item(i);
              console.log(row);
            }
          }
      );
    })
  }

  navigate() {
    let { navigate } = this.props.navigation
    let { brandList } = this.state

    if (brandList.length > 0) {
      navigate('BlockViewer', { brand: brandList })
      this.resetState()
    } else {
      Alert.alert('提示', '無法確認您要尋找的品牌櫃位')
    }
  }

  render() {
    let { finalResults, started, end, recognized } = this.state
    return (
      <View style={voice.pageContainer}>
        <View style={voice.container}>
          <Text style={voice.instructions}>
            請按下按鈕，並說出您要尋找的品牌
          </Text>
          {
            started !== '' && end === ''? 
            <Text
              style={voice.stat}>
              讀取中...
            </Text>:undefined
          }
          { end !== '' && finalResults.length > 0?
            <Text
              style={voice.stat}>
              辨識結果：
            </Text>:undefined
          }
          { end !== '' && finalResults.length > 0?
            finalResults.map((result, index) => {
              return (
                <Text
                  key={`final-result-${index}`}
                  style={voice.result}>
                  {result}
                </Text>
              )
            }):undefined
          }
        </View>
        <View style={voice.buttonContainer}>
          <TouchableHighlight 
            onPress={this.voiceTrigger} 
            underlayColor={'#dddddd'}>
            <Image
              style={voice.button}
              source={require('./image/p/btn_voice_rec.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
