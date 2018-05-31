import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

import { pickers } from './theme';

const ComboPicker = ({ selectValue, selectChange, dataList, label }) => (
   <View>
      <Text style={ pickers.textLabel }>
         {label}
      </Text>
      <Picker 
         selectedValue = {selectValue} 
         onValueChange = {selectChange}>
         {dataList.map( (i, index) => (
            <Picker.Item key={i} label={i.label} value={i.value} />
         ))}
      </Picker>
   </View>
)

export default ComboPicker
