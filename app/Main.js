import React, { Component } from 'react'
import { View, ScrollView, Image, AsyncStorage } from 'react-native'

import Menu from './component/Menu'

import { mains } from './component/theme'
import { GOOGLE_DRIVE } from './component/constants';

class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			uri: GOOGLE_DRIVE + '1YmiMsYPbNgVHnhcW1N0Kt4l6k4_12HDv',
		}
		this.randomImage = this.randomImage.bind(this)
	}
	async componentDidMount() {
		try {
			let loginToken = await AsyncStorage.getItem('loginToken')
			this.props.screenProps.loginToken = loginToken
			this.timer = setInterval(()=>{this.randomImage()}, 3000)
		} catch (e) {
			console.log('e: ', e)
		}
	}
	async componentDidUnmount() {
	 	this.timer && clearInterval(this.timer);
	}
	randomImage(){
		let image = [
			'1YmiMsYPbNgVHnhcW1N0Kt4l6k4_12HDv',
			'1yXIvn021j331gDB0rM1KpH5GDX0LsNyT',
			'1rSaefYJIVmODr1DC-v1O3weUje7PQ8CB',
			'11t3_47rKZSf0oaWbKERnD42WkdWVaOta',
			'12yqBY1ArC4MwqVOfobPJNklmT4aBWvjf',
			'1ST58xhB4FvhxrmoStZvItFwSH_FBAEkq',
			'1Xhg4I7JVH69lJ4flJfX27sfzkdlDr8yG',
			'1X6ao0N8qjW-3o6gu-aW1vt1D1uYk4iIJ',
			'1W9LqijtbLLXn_G1AmZFWBIjISI1FGxM7',
			'15dOUA4nhWMGWoVLdHzTbKj8_5dYD8J9F',
			'1lot6wlSglNndxVNIOviQxrHFlVh5Pdr9',
			'1QOrAklrsI8sPUPaN8mFbAQYaTTSWTyW7',
			'1XsNkcCqBEjjBOVr5I1AfhM0APhmoVLGJ',
			'1EY14NJyHTnrEeZAcWaoO5AhnvPiCXCMb',
			'1TvxYm73LlnrPG3aK--2zkRQNXravaXSp',
			'1eBBKmbIxWdS4-WwdUAXMqJQX5FxclIoW',
			'1_46iTFNEc-vROEtb5VCLthFIG00-KNif',
			'1s0JDm25cuO4Rc2JfyBpLven3bBNeR2_k',
			'14GKsnNc6uQOBeOeTfyYQJ5kISL4aZzCL',
			'155OuGjBEJITlalESfiABalda17jW7PfW',
			'1tb0mxcp3ZtuDvJ7JjlOrI2Oh1ZV9HktW',
			'1GRM3nIxkOWYOGBNz5XN5AbRdV5PjlajK',
			'1hRiVem3KYi699AxQ0UW6pjyuJ9L6JnDo',
			'1rdPIeZfxLT6bTmdm3hlJTOH4dcKgkc6y',
			'1QzAWIbrm6D4HEX_ScP3iCBitFNMEG4CY',
			'153SUd4pPBnWYezZhYq2GCtjppUzpNCuF',
			'1G9r0wpbPgWy63CqkUsqBIVz7Q6a2RG8c',
			'153wqAhcZOxXQbad10HJqE7SeRB-j3vKp',
			'1yZEXxXjc_uGYi6wIShksawUJsaKFAXlp',
			'1G_8cSzdoI92EyPGJ9WUw9WC4TTM8b68v',
			'1W6793xQ3Xn-kf0dYHIAGbghtoy7u52IS',
			'1AQxNpkS9ZWxUcE-Zpmd7pnhN_7Dh0Db-',
			'1x9I6k9Lu-EyplTMbn9P33f0yXOQARv2P',
			'12gC59TMBW9lNHojGnByA8PmJagbOSIAk',
			'1sQnZZOY9T1JpgXkapsmA6zKysh35BlLp',
			'1qL29CwolkU93oXHaODB8xyQYNXeOx5UE',
			'1ejfxGcBvZyJWPkUpQZfj9DI9l1TG8jj8',
			'18ypHoVXI2Jz4LlkBHZEBT54el-roLnwF',
			'1LOAyOse4nkMQyUI4eU3a3wth0z8kABqk',
			'1fK1EyOlawE9nuJEZdifnpk2o5d-gGMvX',
			'1t2REnu6lBgIlaqQ1Y7gBvHaC4MuL3Tme',
			'1kNMPnbtJ-vf3vCSWAQZk1ydmqYQfh8M7',
			'1gYH3e-_wxLQ2GjecJ95GG1iUAef8CGU7',
			'1sKVbmmX6Ao0BwWgHw9suUgagLJ4RX9u3',
			'1UNAIJZF_eNNF0d9hyubtm1s1l5sy-SoR',
			'1GRJoAqSpTObc8k2V_CobUxhBsYWzNBZr',
			'1gUQRXjzvJlOE2nprAAUFN_-UNGIa7OD-',
			'1-z8bBetcGcOhTY-KjmcEFtUH_r1QfHxv',
			'1LNcoqrdO6rKAqW8GxPLakgnXRfKuB4xU',
			'1TVOXY-XtfbCI8-wHYU514GwykELAkQQn',
			'1DVnzXn5LZ2zHqy5u1i93bRJb_kJOcnPL',
			'1yrlm_9GlMwA_80f3NE5ipnKkHNL8hvLV',
			'1GVxjH_JjcnZxP9MZ1KJOy1BM7TAW8cun',
			'1pwznYQV7rOmiMKcU8r_VOZ41e4r1Ardo',
			'1Kzt-pPXCk5qg1cl013tP6-wBZEWyK7bU',
			'1bRROvNz9HIFuWf566KvBn9mXf5QRCYyg',
			'1EdtTRYX3Foc6vCiUw9cDc2CMywZIfMHR',
			'1Vro163TUz3sWNSNk_QdWUPMAtRDKhW3-',
			'1hTKjqViVueuhVFI8Hqj89p_W9q_C597L',
			'14Ek53ZZbD16ttqQhKBDd-69KpOQ6NB5D',
			'1ZGbdqEeExiRQ2NdALBbGdZfzHpPVaU5m',
			'1vy66rOarnqYM4bh5_Z7OT87TpQR-1Wqu',
			'1IaHQKdkAte0PUxuNi6V2_Of2WgTUkUSN',
			'11u9vf9jKnA7vYVZIxHpXFru3D6xSnLUA',
			'1QCYmBilv-hdF9-gM7Itd6RwSc0WOoQFX',
			'18Ggymm7o0lxYn_PzEkOb0A_jh6wqtZOD',
			'1KgDqomcOPherKrgxg4pCINDZK1zS6402',
			'1RfQUi5nxteu7lSEaiZrOiQGzyGlSgxCj',
			'16c7utZ97JdhYsBIX6sVJt6J_T6i7ntPa',
			'1AO3caDoNUeEcoBmuELhUlPFCJNSoxsPe',
			'1HvBYQjXhEIG9oTpIN_0tvbxatvtCmE4V',
			'1ZMFmrydojj2BP_Vv6hvzIaw7jMYZ-Ux5',
			'1ppok_YpIurMONUxanSxIn5GMTgU3RQSV',
			'1TxJY56-zmcuJegFY_DdAL3SKsz1EGbs_',
			'1mqZWyQm52t3dnDDWXasj5v9-p4PUIHWH',
			'1wZHjNJYVetqx_igRGFHMAgWYLH-E4o0m',
			'1S6NvROiqm7dfg6CBOS9O_42noY4EpRRD',
			'1OIhkshntYYWL4U1YdK0_viV0ZjXKMQcy',
			'1H0XyNA1-mq0cQlluoZo7FSd7kfJjv6jN',
			'1smNLHZnHwgGPd1vqBGi9yZo9UZk9onW3',
			'1Qn-eMONUg2FhOcmQ9lX5KYPKhXXpCbce',
			'1diPrzL5Q0gqUwNxVAI7KkVytdtBIObm7',
			'1CUMo_gN43ev0kBYDFIPIbREgdRQpDg2u',
			'1rl01CPH01Tk1177up1S-1U91GCMNcxRH',
			'1X8ZaDF7JPClRE7Vgd1NtJxMQ9J0TvMHo',
			'1Z88lbqJ_qwLujU0mbhBZ0IUnxI3rtG90',
			'1K1DdLxFhjqvwAFgRORtCqpSI4CW4aHXK',
			'1U4fluziLc_fBxGMDofN_uButae-dJAPh',
			'1HZxq47XhDc7pui278kMGGddxtFiTJ5VU',
			'1vfF31nBRQU3u_VPtAUHGU65MAW6FxcFL',
			'1uHsSOYyJf7LibB4R_J1c8L6wYv3oF7iX'
			]
		let index = Math.floor(Math.random()*image.length)
		this.setState({
			uri: GOOGLE_DRIVE+image[index]
		})
	}
	render () {
		const { uri } = this.state
		return(
			<View style={mains.container}>
				<View style={mains.topContainer}>
		          <Image 
		            source={require('./image/190514_0002.jpg')}
		            style={mains.image} />
				</View>
				<View style={mains.bottomContainer}>
		          <Image 
		            source={{uri: uri}}
		            style={mains.image} />
				</View>
				<Menu navigation={this.props.navigation} />
			</View>
		)
	}
}

export default Main