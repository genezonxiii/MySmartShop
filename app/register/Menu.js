import React, { Component } from 'react';
import { View, Text, Alert, 
FlatList,
Image,
StyleSheet,
TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { menus } from './theme';

import Login from '../Login';
import Register from '../Register';
import Guide from '../Guide';

const links = [
  { title: '登入', value: 'Login' },
  { title: '註冊', value: 'Register' },
  { title: '導航', value: 'Guide' },
]

class Menu extends Component  {
  navigate = (link) => {
    const { navigate } = this.props.navigation
    navigate(link)
  }

  renderItem = ({ item, index }) => {
    return (
    <TouchableHighlight
      onPress={() => this.navigate(item.value)}
      style={[menus.item, { borderTopWidth: index === 0 ? 1 : null }, index === 2 ? menus.item2:null]}>
      <Text style={menus.text}>{item.title}</Text>
    </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={menus.container}>
        <FlatList
          data={links}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
          horizontal={true}
        />
      </View>
    );
  }

}

const AppNavi = StackNavigator({
  Home: {
    screen: Menu,
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Guide: {
    screen: Guide
  },
});

export default AppNavi
