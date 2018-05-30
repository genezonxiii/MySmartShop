import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

import Button from './register/Button';

var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~guide.db'})

export default class Guide extends Component {
  constructor(props){
    super(props)
    const { screenProps: { entrypointid } } = this.props
    this.state = {
      guide: [],
      entrypointid: entrypointid,
      idx: 0,
    }
    this.loadData = this.loadData.bind(this)
    this.transit = this.transit.bind(this)
    this.loadData(this.state.entrypointid)
  }

  loadData(entrypointid) {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tb_guide where entrypointid=?', [entrypointid], (tx, results) => {
        let { guide } = this.state;
        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          guide.push(row);
        }

        this.setState({
          guide: guide
        })
      });
    });    
  }

  transit(){
    let { guide, idx } = this.state
    if (++idx > guide.length-1) {
      Alert.alert('導航結束！')
      idx = 0
    } 
    this.setState({
      idx: idx
    })
  }

  render() {
    let { guide, idx } = this.state
    guideList = guide.filter((element, index )=> index == idx).map((guide, i) => {
      return (
        <View 
          style={styles.pageStyle} 
          key={i}>
          <Text 
            style={styles.heading}>
            {guide.entrypointdesc}
          </Text>
          <Image 
            source={{
              uri: 'https://drive.google.com/uc?id=' + guide.photopath,
              method: 'POST',
            }}
            style={{width: 300, height: 200}} />
          <Text 
            style={styles.heading}>
            {guide.presentlocation}
          </Text>
          <Text 
            style={styles.heading}>
            {guide.description}
          </Text>
        </View>
      )
    })

    return (
      <ScrollView
        style={styles.viewPager}>
        {guideList}
        <Button 
          btnText='下一步'
          onPress={this.transit}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
    alignSelf: 'center'
  },
});
