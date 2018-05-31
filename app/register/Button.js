import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { buttons } from './theme'

const Button = ({ btnText, onPress }) => (
  <View style={buttons.buttonContainer}>
    <TouchableHighlight underlayColor='#efefef' style={buttons.button} onPress={onPress}>
      <Text style={buttons.submit}>
        {btnText}
      </Text>
    </TouchableHighlight>
  </View>
)

export default Button
