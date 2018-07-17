import React from 'react'
import { 
  View, 
  TextInput, 
  Text
} from 'react-native'

import { inputs } from './theme';

const Input = ({ inputChange, inputValue, label, placeholder, passwordFlag }) => (
  <View style={inputs.inputWrap}>
    <Text style={ inputs.inputLabel }>
      {label}
    </Text>
    <TextInput
      value={inputValue}
      style={inputs.inputText}
      secureTextEntry={passwordFlag?passwordFlag:false}
      placeholder={placeholder}
      underlineColorAndroid='transparent'
      onChangeText={inputChange} />
  </View>
)

export default Input
