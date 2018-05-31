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
import { guideViewers } from './theme';

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
          style={guideViewers.pageStyle} 
          key={i}>
          <Text 
            style={guideViewers.heading}>
            {guide.entrypointdesc}
          </Text>
          <Image 
            source={{
              uri: 'https://drive.google.com/uc?id=' + guide.photopath,
              method: 'POST',
            }}
            style={guideViewers.image} />
          <Text 
            style={guideViewers.heading}>
            {guide.presentlocation}
          </Text>
          <Text 
            style={guideViewers.heading}>
            {guide.description}
          </Text>
        </View>
      )
    })

    return (
      <ScrollView
        style={guideViewers.viewPager}>
        {guideList}
        <Button 
          btnText='下一步'
          onPress={transit}
        />
      </ScrollView>
    )
  }
}
