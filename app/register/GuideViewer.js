import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

import Button from './Button';

var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~guide.db'})

export default class GuideViewer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { screenProps: { entrypointid, guide, transit, viewerIndex } } = this.props
    guideList = guide.filter((element, index )=> index == viewerIndex).map((guide, i) => {
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
          onPress={transit}
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
