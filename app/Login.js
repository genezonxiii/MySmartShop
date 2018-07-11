import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Alert, AsyncStorage } from 'react-native'
import Button from './component/Button'
import Input from './component/Input'

import { logins } from './component/theme'
import { HOST_SERVER } from './component/constants';

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			login: {
				username: '',
				password: '',
			},
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
		let url = HOST_SERVER + 'customer/login'
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
				})
				this.props.screenProps.loginToken = responseJson.token
				AsyncStorage.setItem('loginToken', JSON.stringify(responseJson.token))
					.then(() => console.log('storage updated!'))
					.catch(e => console.log('e: ', e))
				this.navigate()
			}
	    })
		.catch((error) => {
	      	Alert.alert('登入失敗！');
	    });
	}

	navigate () {
		Alert.alert('登入成功!!')
		this.props.navigation.navigate('Home')
	}

	render () {
		const { login } = this.state

		return (
			<View
				style={logins.container}>
				<ScrollView
					keyboardShouldPersistTaps='always'>
					<View style={logins.content}>
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
						underlayColor={'#8B7F73'}
						onPress={this.login} />
					</View>
				</ScrollView>
			</View>
		)
	}
}

export default Login
