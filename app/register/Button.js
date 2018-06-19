import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { buttons } from './theme'

const Button = ({ btnText, onPress, linearColor }) => (
  <View style={buttons.buttonContainer}>
  <LinearGradient 
  	colors={linearColor} 
  	locations={[0,0.5,1]}
  	style={buttons.linearGradient}>
    <TouchableHighlight style={buttons.button} onPress={onPress}>
      <Text style={buttons.buttonText}>
        {btnText}
      </Text>
    </TouchableHighlight>
  </LinearGradient>
  </View>
)

export default Button
