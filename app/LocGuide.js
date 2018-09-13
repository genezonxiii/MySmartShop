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
    this.voiceTrigger = this.voiceTrigger.bind(this)
    this._startRecognizing = this._startRecognizing.bind(this)
    this._stopRecognizing = this._stopRecognizing.bind(this)
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
    console.log("onSpeechStart")
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
    console.log("onSpeechRecognized")
  }

  onSpeechEnd(e) {
    this.setState({
      end: '√',
    });
    console.log("onSpeechEnd")
    this.setBrandList()
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error),
    });
    console.log("onSpeechError")
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
    console.log("onSpeechResults:", e.value.toString())
  }

  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value,
    });
    console.log("onSpeechPartialResults:", e.value.toString())
  }

  onSpeechVolumeChanged(e) {
    this.setState({
      pitch: e.value,
    });
    console.log("onSpeechVolumeChanged")
  }

  async _startRecognizing(e) {
    console.log("_startRecognizing")
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
    console.log("_stopRecognizing")
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }

  async _cancelRecognizing(e) {
    console.log("_cancelRecognizing")
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }

  async _destroyRecognizer(e) {
    console.log("_destroyRecognizer")
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
    console.log("SetBrandList")
    if (end == '') return
    let brand = results[0]
    console.log("select sqlite", results, partialResults)
    console.log("toString: ", results.toString(), partialResults.toString())
    
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
        console.log("brandList:", brandList)
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
        <View>
              <Text
                style={styles.stat}>
                {`Started: ${this.state.started}`}
              </Text>
              <Text
                style={styles.stat}>
                {`Recognized: ${this.state.recognized}`}
              </Text>
              <Text
                style={styles.stat}>
                {`Pitch: ${this.state.pitch}`}
              </Text>
              <Text
                style={styles.stat}>
                {`Error: ${this.state.error}`}
              </Text>
              <Text
                style={styles.stat}>
                Results
              </Text>
              {this.state.results.map((result, index) => {
                return (
                  <Text
                    key={`result-${index}`}
                    style={styles.stat}>
                    {result}
                  </Text>
                )
              })}
              <Text
                style={styles.stat}>
                Partial Results
              </Text>
              {this.state.partialResults.map((result, index) => {
                return (
                  <Text
                    key={`partial-result-${index}`}
                    style={styles.stat}>
                    {result}
                  </Text>
                )
              })}
              <Text
                style={styles.stat}>
                {`End: ${this.state.end}`}
              </Text>
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

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
});

