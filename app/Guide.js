import React, { Component } from 'react'
import { View, Alert, Platform } from 'react-native'
import ComboPicker from './component/Picker'
import GuideViewer from './component/GuideViewer'

import { guides } from './component/theme'

var Sound = require('react-native-sound');

var SQLite = require('react-native-sqlite-storage')
var db = undefined
if (Platform.OS === 'ios') {
	db = SQLite.openDatabase({name: 'guide.db', createFromLocation: 1})
} if (Platform.OS === 'android') {
	db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~guide.db'})	
}

class Guide extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entry: [],
			guide: [],
			entrypointid: 1,
			viewerIndex: 0,
			sound: '',
		}
		this.loadEntry = this.loadEntry.bind(this)
		this.loadGuide = this.loadGuide.bind(this)
		this.entryChange = this.entryChange.bind(this)
		this.transit = this.transit.bind(this)
		this.play = this.play.bind(this)
		this.loadEntry()
		this.loadGuide(this.state.entrypointid)
	}

	loadEntry() {
		db.transaction((tx) => {
			tx.executeSql('SELECT entrypointid, entrypointdesc FROM tb_guide group by entrypointid, entrypointdesc', 
				[], (tx, results) => {
				let { entry } = this.state;
				var len = results.rows.length;
				for (let i = 0; i < len; i++) {
					let row = results.rows.item(i);
					let obj = {
						value: row.entrypointid,
						label: row.entrypointdesc,
					}
					entry.push(obj);
				}

				this.setState({
					entry: entry,
				})
			});
		});    
	}

	loadGuide(entrypointid) {
		db.transaction((tx) => {
			tx.executeSql('SELECT * FROM tb_guide where entrypointid=?', [entrypointid], (tx, results) => {
				var len = results.rows.length;
				let guide = []
				for (let i = 0; i < len; i++) {
					let row = results.rows.item(i);
					guide.push(row);
				}

				this.setState({
					guide: guide,
					sound: guide[0].sound,
				})

				this.playSound(guide[0].sound)
			});
		});    
	}

	entryChange(text) {
		let { entrypointid, guide } = this.state
		this.setState({
			entrypointid: text,
			viewerIndex: 0,
		})
		this.loadGuide(text)
	}

	transit(){
		let { viewerIndex, guide } = this.state
		if (++viewerIndex > guide.length-1) {
			Alert.alert('提示', '導航結束！')
			viewerIndex = 0
		} 

		this.setState({
			viewerIndex: viewerIndex,
			sound: guide[viewerIndex].sound,
		})

		this.playSound(guide[viewerIndex].sound)
	}

	play(){
		this.playSound(this.state.sound)
	}

	async playSound (filename) {
		await this.loadSound(filename)
		this.player.play((success) => {
			if (!success) {
				this.player.reset()        
			}
			this.player.release()
		})
	}

	loadSound (filename) {
		return new Promise((resolve, reject) => {
			Sound.setCategory('Playback', true)
			this.player = new Sound(filename, Sound.MAIN_BUNDLE, (error) => {
				if (error) {
					reject(error)
				}
				resolve()
			})
		})
	}

	render () {
		let { entry, entrypointid, guide, viewerIndex } = this.state
		return (
			<View
				style={guides.container}>
				<ComboPicker
					selectValue={entrypointid}
					selectChange={(text)=>this.entryChange(text)}
					dataList={entry} />
				<GuideViewer
					screenProps={{
			          entrypointid: entrypointid,
			          guide: guide,
			          transit: this.transit,
			          play: this.play,
			          viewerIndex: viewerIndex
			        }} />
			</View>
		)
	}
}

export default Guide
