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
          btnText='登入'
          btnImage='Login'
          onPress={() => this.navigate('Login')}
        />
        <ImageButton
          btnText='註冊'
          btnImage='Register'
          onPress={() => this.navigate('Privacy')}
        />
        <ImageButton
          btnText='導航'
          btnImage='Guide'
          onPress={() => this.navigate('Guide')}
        />
        <ImageButton
          btnText='商品'
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

