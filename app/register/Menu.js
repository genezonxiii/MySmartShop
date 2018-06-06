import React, { Component } from 'react';
import { View, Text, Alert, 
FlatList,
Image,
StyleSheet,
TouchableHighlight,
} from 'react-native';

import ImageP from './ImageP';
import { menus } from './theme';

const links = [
  { title: '登入', value: 'Login' },
  { title: '註冊', value: 'Register' },
  { title: '導航', value: 'Guide' },
  { title: 'title1', value: 'value1' },
  { title: 'title2', value: 'value2' },
  { title: 'title3', value: 'value3' },
]

export default class Menu extends Component  {
  constructor(props){
    super(props)
  }
  navigate = (link) => {
    const { navigate } = this.props.navigation
    navigate(link)
  }

  renderItem = ({ item, index }) => {
    return (
    <TouchableHighlight
      onPress={() => this.navigate(item.value)}
      style={[index < 3 ? menus.itemUp:null, index >= 3 ? menus.itemDown:null, { borderTopWidth: index === 0 ? 1 : null }]}>
      <View>
        <ImageP 
          value={item.value}
        />
        <Text style={menus.text}>{item.title}</Text>
      </View>
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

