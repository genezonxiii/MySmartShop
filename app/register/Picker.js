import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

const ComboPicker = ({ selectValue, selectChange, dataList, label }) => (
   <View>
      <Text style={ styles.textLabel }>
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

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
   textLabel: {

   },
})