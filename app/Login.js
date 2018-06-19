import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Alert } from 'react-native'
import Button from './register/Button'
import Input from './register/Input'

import { logins } from './register/theme'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			login: {
				username: '',
				password: '',
			},
			token: {
			}
		}
		this.login=this.login.bind(this)
	}

	usernameChange (text) {
		this.setState({ login: { ...this.state.login, username: text } })
	}

	passwordChange (text) {
		this.setState({ login: { ...this.state.login, password: text } })
	}

	login () {
		const { login } = this.state
		let url = 'http://192.168.28.30:8080/SmartShop/customer/login'
		fetch(url, {  
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				password: login.password,
				email: login.username,
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if(responseJson.accountId != '') {
				this.setState({
					login: {
						username: '',
						password: '',
					},
					token: responseJson
				})
				this.navigate()
			}
	    })
		.catch((error) => {
	      	Alert.alert('登入失敗！');
	    });
	}

	navigate () {
		Alert.alert('登入成功!!')
		this.props.navigation.navigate('Register')
	}

	render () {
		const { login } = this.state

		return (
			<View
				style={logins.container}>
				<ScrollView
					keyboardShouldPersistTaps='always'
					style={logins.content}>
					<Input
						inputValue={login.username}
						inputChange={(text)=>this.usernameChange(text)}
						label='帳號'
						placeholder='請輸入帳號或E-mail' />
					<Input
						inputValue={login.password}
						inputChange={(text)=>this.passwordChange(text)}
						passwordFlag={true}
						label='密碼'
						placeholder='請輸入密碼' />
					<Button
						btnText='登入'
						linearColor={['#CBC6BA', '#85786C', '#C9C4B8']}
						onPress={this.login} />
				</ScrollView>
			</View>
		)
	}
}

export default Login
