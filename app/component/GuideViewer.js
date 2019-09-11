import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Linking,
} from 'react-native';

import Button from './Button';
import { guideViewers } from './theme';
import { GOOGLE_DRIVE } from './constants';

export default class GuideViewer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { screenProps: { entrypointid, guide, transit, play, viewerIndex, btnPlayText, btnNextText } } = this.props
    guideList = guide.filter((element, index )=> index == viewerIndex).map((guide, i) => {
      return (
        <View 
          style={guideViewers.pageStyle} 
          key={i}>
          <Image 
            source={{
              uri: GOOGLE_DRIVE + guide.photopath,
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
            <Text 
              style={guideViewers.brand}
              onPress={() => Linking.openURL(`https://meet.eslite.com/tw/tc/cooperationbrand/${guide.brandurl1}`)}>
              {guide.brand1}
            </Text>
            <Text 
              style={guideViewers.brand}
              onPress={() => Linking.openURL(`https://meet.eslite.com/tw/tc/cooperationbrand/${guide.brandurl2}`)}>
              {guide.brand2}
            </Text>
            <Text 
              style={guideViewers.brand}
              onPress={() => Linking.openURL(`https://meet.eslite.com/tw/tc/cooperationbrand/${guide.brandurl3}`)}>
              {guide.brand3}
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
            btnText={btnPlayText?btnPlayText:'播放'}
            onPress={play}
            linearColor={['#CBC6BA', '#85786C', '#C9C4B8']}
            underlayColor={'#8B7F73'}
          />
        </View>
        <View style={guideViewers.btnRow}>
          <Button 
            btnText={btnNextText?btnNextText:'下一步'}
            onPress={transit}
            linearColor={['#CBC6BA', '#85786C', '#C9C4B8']}
            underlayColor={'#8B7F73'}
          />
        </View>
      </View>
    )
  }
}
