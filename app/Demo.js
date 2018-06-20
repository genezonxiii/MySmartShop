import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Button from './component/Button'
import Input from './component/Input'
import Picker from './component/Picker'
import GuideViewer from './component/GuideViewer'
import AppNavi from './component/Menu'

class Demo extends Component {
	state = {
		guide: [{
			entrypointdesc: 'Entry',
			presentlocation: 'Location',
			description: 'With React Native, you don\'t build a \"mobile web app\", an \"HTML5 app\", or a \"hybrid app\". You build a real mobile app that\'s indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.',
			photopath: '1it8r8oafnuzgnF6A7_zRQoAjVSmY7XOs',
		}],
		list: [
			{label: 'Label1', value: '1'},
			{label: 'Label2', value: '2'},
			{label: 'Label3', value: '3'},
			{label: 'Label4', value: '4'},
			{label: 'Label5', value: '5'},
		],
	}

	render () {
		let { guide, list } = this.state
		return (
			<ScrollView> 
				<Input 
					label='Input Label'
					placeholder='Placeholder'
				/>
				<Picker
					dataList={list}
					label='DropDown Label'
				/>
				<Button
					btnText='Button'
					onPress={this.transit}
				/>
				<AppNavi
				/>
				<GuideViewer
					screenProps={{
						entrypointid: 1,
						guide: guide,
						viewerIndex: 0
					}} />
			</ScrollView>
		)
	}
}

export default Demo