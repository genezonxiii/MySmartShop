import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet, Platform } from 'react-native'

import { pickers } from './theme';

export default class ComboPicker extends Component {
  constructor(props){
    super(props)
  }

   render() {
      let { selectValue, selectChange, dataList, label } = this.props

      return (
   <View>
      <View style={ pickers.pickerWrap }>
      {
         label != undefined?
         <Text style={ pickers.inputLabel }>
            {label}
         </Text>:null
      }
      <View style={pickers.container}>
      {
         Platform.OS === 'android'?
         <Picker 
            style={pickers.picker}
            selectedValue = {selectValue} 
            onValueChange = {selectChange}>
            {dataList.map( (i, index) => (
               <Picker.Item key={i} label={i.label} value={i.value} />
            ))}
         </Picker>
         :
         <Picker 
            style={pickers.picker}
            itemStyle={pickers.itemStyle}
            selectedValue = {selectValue} 
            onValueChange = {selectChange}>
            {dataList.map( (i, index) => (
               <Picker.Item key={i} label={i.label} value={i.value} />
            ))}
         </Picker>
      }         
      </View>
      </View>
   </View>
      )
   }
}
