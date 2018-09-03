import React from 'react'
import { Image, View } from 'react-native'
import { imageX } from './theme'

const ImageX = ({ value }) => (
	<View>
	
    	{
			value == 'p'? <Image style={imageX.image} source={ require('../image/p/position.png') } />: 
			value == 'B1'? <Image style={imageX.image} source={ require('../image/p/position-B-B1.png') } />:
			value == 'B2'? <Image style={imageX.image} source={ require('../image/p/position-B-B2.png') } />:
			value == 'B4'? <Image style={imageX.image} source={ require('../image/p/position-B-B4.png') } />:
			value == 'B5'? <Image style={imageX.image} source={ require('../image/p/position-B-B5.png') } />:
			value == 'B7'? <Image style={imageX.image} source={ require('../image/p/position-B-B7.png') } />:
			value == 'B10'? <Image style={imageX.image} source={ require('../image/p/position-B-B10.png') } />:
			value == 'B11'? <Image style={imageX.image} source={ require('../image/p/position-B-B11.png') } />:
			value == 'B19'? <Image style={imageX.image} source={ require('../image/p/position-B-B19.png') } />:
			value == 'B21'? <Image style={imageX.image} source={ require('../image/p/position-B-B21.png') } />:
			value == 'C1'? <Image style={imageX.image} source={ require('../image/p/position-C-C1.png') } />:
			value == 'C3'? <Image style={imageX.image} source={ require('../image/p/position-C-C3.png') } />:
			value == 'C4'? <Image style={imageX.image} source={ require('../image/p/position-C-C4.png') } />:
			value == 'C7'? <Image style={imageX.image} source={ require('../image/p/position-C-C7.png') } />:
			value == 'C8'? <Image style={imageX.image} source={ require('../image/p/position-C-C8.png') } />:
			value == 'D4'? <Image style={imageX.image} source={ require('../image/p/position-D-D4.png') } />:
			value == 'D7'? <Image style={imageX.image} source={ require('../image/p/position-D-D7.png') } />:
			value == 'D8'? <Image style={imageX.image} source={ require('../image/p/position-D-D8.png') } />:
			value == 'D15'? <Image style={imageX.image} source={ require('../image/p/position-D-D15.png') } />:
			value == 'E1'? <Image style={imageX.image} source={ require('../image/p/position-E-E1.png') } />:
			value == 'E10'? <Image style={imageX.image} source={ require('../image/p/position-E-E10.png') } />:
			value == 'F1'? <Image style={imageX.image} source={ require('../image/p/position-F-F1.png') } />:
			value == 'F3'? <Image style={imageX.image} source={ require('../image/p/position-F-F3.png') } />:
			value == 'F5'? <Image style={imageX.image} source={ require('../image/p/position-F-F5.png') } />:
			value == 'F7'? <Image style={imageX.image} source={ require('../image/p/position-F-F7.png') } />:
			value == 'F8'? <Image style={imageX.image} source={ require('../image/p/position-F-F8.png') } />:
			value == 'F9'? <Image style={imageX.image} source={ require('../image/p/position-F-F9.png') } />:
			value == 'G3'? <Image style={imageX.image} source={ require('../image/p/position-G-G3.png') } />:
			value == 'G7'? <Image style={imageX.image} source={ require('../image/p/position-G-G7.png') } />:
			value == 'G8'? <Image style={imageX.image} source={ require('../image/p/position-G-G8.png') } />:
			value == 'G12'? <Image style={imageX.image} source={ require('../image/p/position-G-G12.png') } />:
			value == 'G14'? <Image style={imageX.image} source={ require('../image/p/position-G-G14.png') } />:
			value == 'G15'? <Image style={imageX.image} source={ require('../image/p/position-G-G15.png') } />:
			value == 'G18'? <Image style={imageX.image} source={ require('../image/p/position-G-G18.png') } />:
			value == 'H1'? <Image style={imageX.image} source={ require('../image/p/position-H-H1.png') } />:
			value == 'I4'? <Image style={imageX.image} source={ require('../image/p/position-I-I4.png') } />:
			value == 'L1'? <Image style={imageX.image} source={ require('../image/p/position-L-L1.png') } />:
			value == 'L2'? <Image style={imageX.image} source={ require('../image/p/position-L-L2.png') } />:
			value == 'L3'? <Image style={imageX.image} source={ require('../image/p/position-L-L3.png') } />:
			value == 'L7'? <Image style={imageX.image} source={ require('../image/p/position-L-L7.png') } />:
			value == 'L9'? <Image style={imageX.image} source={ require('../image/p/position-L-L9.png') } />:
	        undefined
    	}
	
	</View>
)

export default ImageX
