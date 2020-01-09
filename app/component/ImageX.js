import React from 'react'
import { Image, View } from 'react-native'
import { imageX } from './theme'

const ImageX = ({ value }) => (
	<View>
	
    	{
			value == 'A01'? <Image style={imageX.image} source={ require('../image/p/A01.png') } />: 
			value == 'A02'? <Image style={imageX.image} source={ require('../image/p/A02.png') } />: 
			value == 'B01'? <Image style={imageX.image} source={ require('../image/p/B01.png') } />: 
			value == 'B02'? <Image style={imageX.image} source={ require('../image/p/B02.png') } />: 
			value == 'C'? <Image style={imageX.image} source={ require('../image/p/C.png') } />: 
			value == 'D'? <Image style={imageX.image} source={ require('../image/p/D.png') } />: 
			value == 'E'? <Image style={imageX.image} source={ require('../image/p/E.png') } />: 
			value == 'F'? <Image style={imageX.image} source={ require('../image/p/F.png') } />: 
			value == 'G'? <Image style={imageX.image} source={ require('../image/p/G.png') } />: 
			value == 'H'? <Image style={imageX.image} source={ require('../image/p/H.png') } />: 
			value == 'I'? <Image style={imageX.image} source={ require('../image/p/I.png') } />: 
			undefined
    	}
	
	</View>
)

export default ImageX
