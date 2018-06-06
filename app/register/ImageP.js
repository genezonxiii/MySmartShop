import React from 'react'
import { Image, View } from 'react-native'
import { buttons } from './theme'

const ImageP = ({ value }) => (
	<View>
	
    	{
    		value == 'Login'?
	        <Image 
				style={{width: 50, height: 50}}
				source={ require('../image/icon_fortest.png') }
			/>: 
    		value == 'Register'?
	        <Image 
	        	style={{width: 50, height: 50}}
				source={ require('../image/icon_fortest.png') }
			/>:
			value == 'Guide'?
	        <Image 
	        	style={{width: 50, height: 50}}
				source={ require('../image/icon_fortest.png') }
			/>:
	        null
    	}
	
	</View>
)

export default ImageP
