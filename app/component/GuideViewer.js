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
import { GOOGLE_DRIVE } from './constants';

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
          <Image 
            source={{
              uri: GOOGLE_DRIVE + guide.photopath,
              method: 'POST',
            }}
            style={guideViewers.image} />
          <View
            style={guideViewers.directionInfo}>
            <Text 
              style={guideViewers.directionInfoH3}>
              {guide.presentlocation}
            </Text>
            <Text 
              style={guideViewers.directionInfoP}>
              {guide.description}
            </Text>
          </View>
        </View>
      )
    })

    return (
      <View style={guideViewers.container}>
        <ScrollView
          style={guideViewers.viewPager}>
          {guideList}
        </ScrollView>
        <View style={guideViewers.btnRow}>
          <Button 
            btnText='下一步'
            onPress={transit}
            linearColor={['#CBC6BA', '#85786C', '#C9C4B8']}
            underlayColor={'#8B7F73'}
          />
        </View>

      </View>
    )
  }
}
