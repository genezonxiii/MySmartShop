import React from 'react'
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Text
} from 'react-native'

import { inputs } from './theme';

const Input = ({ inputChange, inputValue, label, placeholder, passwordFlag }) => (
  <View style={inputs.inputContainer}>
    <Text style={ inputs.textLabel }>
      {label}
    </Text>
    <TextInput
      value={inputValue}
      style={inputs.input}
      secureTextEntry={passwordFlag?passwordFlag:false}
      placeholder={placeholder}
      placeholderTextColor='#CACACA'
      selectionColor='#666666'
      onChangeText={inputChange} />
  </View>
)

export default Input
