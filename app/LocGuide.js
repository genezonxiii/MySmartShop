import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Platform,
} from 'react-native';

import Voice from 'react-native-voice';
import { voice } from './component/theme'

var SQLite = require('react-native-sqlite-storage')
var db = undefined
if (Platform.OS === 'ios') {
  db = SQLite.openDatabase({name: 'guide.db', createFromLocation: 1})
} if (Platform.OS === 'android') {
  db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~guide.db'})  
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
    this.setBrandList()
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error),
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }

  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value,
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
      end: ''
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

  setBrandList() {
    let { end, partialResults } = this.state
    if (end == '') return
    let brand = partialResults[0]
    
    db.transaction((tx) => {
      tx.executeSql('SELECT district, brand, districtEqual, blockEqual ' 
        + 'FROM tb_position where brand=? or brandEqual like ? '
        + 'group by district, brand, districtEqual, blockEqual', [brand, '%' + brand + '%'], (tx, results) => {
        var len = results.rows.length;
        let brandList = []
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          brandList.push(row);
        }

        this.setState({
          brandList: brandList,
        })

        setTimeout(() => this.navigate(), 1000)
      });
    });
  }

  navigate() {
    let { navigate } = this.props.navigation
    let { brandList } = this.state

    if (brandList.length > 0) {
      navigate('BlockViewer', { brand: brandList })
    } else {
      Alert.alert('提示', '無法確認您要尋找的品牌櫃位')
    }
  }

  render() {
    let { partialResults, started, end, recognized } = this.state
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
          { end !== '' && partialResults.length > 0?
            <Text
              style={voice.stat}>
              辨識結果：
            </Text>:undefined
          }
          { end !== '' && partialResults.length > 0?
            partialResults.map((result, index) => {
              return (
                <Text
                  key={`partial-result-${index}`}
                  style={voice.result}>
                  {result}
                </Text>
              )
            }):undefined
          }
        </View>
        <View style={voice.buttonContainer}>
          <TouchableHighlight 
            onPress={this._startRecognizing.bind(this)} 
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
