import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Button from './register/Button'
import Input from './register/Input'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			login: {
				username: '',
				password: '',
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
	}

	render () {
		const { login } = this.state

		return (
			<View
				style={styles.container}>
				<ScrollView
					keyboardShouldPersistTaps='always'
					style={styles.content}>
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
						onPress={this.login} />
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  content: {
    flex: 1
  }
})

export default Login
