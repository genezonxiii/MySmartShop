import React, { Component } from 'react';
import { View, Linking } from 'react-native';

import ImageButton from './ImageButton';
import { menus } from './theme';

export default class Menu extends Component  {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
  }

  navigate = (link) => {
    const { navigate } = this.props.navigation
    navigate(link)
  }

  render() {
    return (
      <View style={menus.container}>
        <ImageButton
          btnText='景點導航'
          btnImage='Guide'
          onPress={() => this.navigate('Guide')}
        />
        <ImageButton
          btnText='English Guide'
          btnImage='Guide'
          onPress={() => this.navigate('GuideEng')}
        />
        <ImageButton
          btnText='商品快搜'
          btnImage='Location'
          onPress={() => this.navigate('Location')}
        />
        <ImageButton
          btnText='特色商品'
          btnImage='Product'
          onPress={() => this.navigate('Product')}
        />
        <ImageButton
          btnText='虛擬試衣間'
          btnImage='Product'
          right='true'
          onPress={() => Linking.openURL('https://sbi1.cdri.org.tw/web')}
        />
      </View>
    )
  }
}

