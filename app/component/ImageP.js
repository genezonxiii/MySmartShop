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
				source={ require('../image/menuicon_register.png') }
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
			value == 'Location'?		
	        <Image 
	        	style={imageButtons.image}
				source={ require('../image/menuicon_storelocation.png') }
			/>:			
	        value == 'About'?		
	        <Image 
	        	style={imageButtons.image}
				source={ require('../image/menuicon_login.png') }
			/>:			
	        undefined
    	}
	
	</View>
)

export default ImageP
