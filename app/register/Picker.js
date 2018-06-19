import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

import { pickers } from './theme';

const ComboPicker = ({ selectValue, selectChange, dataList, label }) => (
   <View>
      {
         label != undefined?
         <Text style={ pickers.inputLabel }>
            {label}
         </Text>:null
      }
      <View style={pickers.container}>
         <Picker 
            style={pickers.picker}
            prompt='請選擇'
            selectedValue = {selectValue} 
            onValueChange = {selectChange}>
            {dataList.map( (i, index) => (
               <Picker.Item key={i} label={i.label} value={i.value} />
            ))}
         </Picker>
      </View>
   </View>
)

export default ComboPicker
