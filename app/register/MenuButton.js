import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { menuButtons } from './theme'

const MenuButton = ({ btnText, onPress }) => (
  <View style={menuButtons.buttonContainer}>
    <TouchableHighlight underlayColor='#efefef' style={menuButtons.button} onPress={onPress}>
      <Text style={menuButtons.submit}>
        {btnText}
      </Text>
    </TouchableHighlight>
  </View>
)

export default MenuButton
