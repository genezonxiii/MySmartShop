import React from 'react'
import { 
  View, 
  Switch,
  Text,
} from 'react-native'

import { switchns } from './theme';

const SwitchN = ({ valueChange, value, hint }) => (
  <View style={switchns.container}>
    <Text style={ switchns.inputLabel }>
      {hint}
    </Text>
    <Switch
      onValueChange = {valueChange}
      value = {value}
      style={ switchns.switch}
    />
  </View>
)

export default SwitchN
