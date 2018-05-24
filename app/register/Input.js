import React from 'react'
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Text
} from 'react-native'

const Input = ({ inputChange, inputValue, label, placeholder, passwordFlag }) => (
  <View style={styles.inputContainer}>
    <Text style={ styles.textLabel }>
      {label}
    </Text>
    <TextInput
      value={inputValue}
      style={styles.input}
      secureTextEntry={passwordFlag?passwordFlag:false}
      placeholder={placeholder}
      placeholderTextColor='#CACACA'
      selectionColor='#666666'
      onChangeText={inputChange} />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  },
  textLabel: {

  },
})

export default Input
