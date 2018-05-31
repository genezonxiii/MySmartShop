import React from 'react'
import { View, Text } from 'react-native'

import MenuButton from './MenuButton'
import { menus } from './theme'

const Menu = ({ btnText, onPress }) => (
  <View style={menus.container}>
      <MenuButton btnText={btnText} onPress={onPress} />
      <MenuButton btnText={btnText} onPress={onPress} />
      <MenuButton btnText={btnText} onPress={onPress} />
      <MenuButton btnText={btnText} onPress={onPress} />
      <MenuButton btnText={btnText} onPress={onPress} />
      <MenuButton btnText={btnText} onPress={onPress} />
  </View>
)

export default Menu
