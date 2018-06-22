import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import ImageP from './ImageP';
import { imageButtons } from './theme'

const ImageButton = ({ btnText, btnImage, onPress, right }) => (
  <View 
    style={[imageButtons.buttonContainer, 
      right!='true'?imageButtons.buttonBorder:imageButtons.buttonBorderRight]}>
    <TouchableHighlight underlayColor={'#dddddd'} onPress={onPress}>
      <View style={imageButtons.center}>
        <ImageP value={btnImage} />
        <Text style={imageButtons.text}>
          {btnText}
        </Text>
      </View>
    </TouchableHighlight>
  </View>
)

export default ImageButton
