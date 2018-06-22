import React from 'react'
import { Image, View } from 'react-native'
import { imageButtons } from './theme'

const ImageP = ({ value }) => (
	<View>
	
    	{
    		value == 'Login'?
	        <Image 
	        	style={imageButtons.image}
				source={ require('../image/menuicon_login.png') }
			/>: 
    		value == 'Register'?
	        <Image 
	        	style={imageButtons.image}
				source={ require('../image/icon_fortest.png') }
			/>:
			value == 'Guide'?
	        <Image 
	        	style={imageButtons.image}
				source={ require('../image/menuicon_navigation.png') }
			/>:
			value == 'Product'?
	        <Image 
	        	style={imageButtons.image}
				source={ require('../image/menuicon_goods.png') }
			/>:			
	        null
    	}
	
	</View>
)

export default ImageP
