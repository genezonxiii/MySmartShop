import React, { Component } from 'react';
import { View } from 'react-native';

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
          btnText='關於我們'
          btnImage='About'
          onPress={() => this.navigate('About')}
        />
        <ImageButton
          btnText='館內景點導航'
          btnImage='Guide'
          onPress={() => this.navigate('Guide')}
        />
        <ImageButton
          btnText='商品快搜'
          btnImage='Location'
          onPress={() => this.navigate('Location')}
        />
        <ImageButton
          btnText='特色商品'
          btnImage='Product'
          right='true'
          onPress={() => this.navigate('Product')}
        />
      </View>
    )
  }
}

