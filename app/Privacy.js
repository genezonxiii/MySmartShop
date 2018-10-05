import React, { Component } from 'react';
import { View, WebView, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Button from './component/Button';
import { privacys } from './component/theme';

export default class Privacy extends Component {
	constructor(props){
		super(props)
		this.state = {
			checked: false,
		}
		this.toggleCheckBox = this.toggleCheckBox.bind(this)
		this.navigate = this.navigate.bind(this)
	}

	toggleCheckBox() {
		this.setState({
			checked: !this.state.checked
		})
	}

	navigate () {
		if (!this.state.checked) {
			Alert.alert('請勾選同意選項')
			return
		}
		this.props.navigation.navigate('Register')
	}

  	render() {
	    return (
	    <View style={privacys.container}>
			<WebView
				source={{uri: 'http://sbi1.cdri.org.tw/shopmodel/privacy.jsp'}}
				style={privacys.web}
			/>
			<CheckBox 
				center
				title='我已閱讀並同意以上條款'
				checked={this.state.checked}
				textStyle={privacys.chkTextStyle}
				containerStyle={privacys.containerStyle}
				checkedColor='gold'
				uncheckedColor='gold'
				onPress={this.toggleCheckBox}
			/>
			<View style={privacys.btnRow}>
				<Button 
					btnText='下一步'
					onPress={this.navigate}
					linearColor={['#CBC6BA', '#85786C', '#C9C4B8']}
					underlayColor={'#8B7F73'}
				/>
			</View>
	    </View>
	    );
	}
}