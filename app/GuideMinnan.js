import React, { Component } from 'react'
import { View, Alert, Platform } from 'react-native'
import ComboPicker from './component/Picker'
import GuideViewer from './component/GuideViewer'

import { guides } from './component/theme'

var Sound = require('react-native-sound');

let db = require('./component/Model').getConnection();

class GuideMinnan extends Component {
	constructor(props) {
		super(props)
		this.state = {
			entry: [],
			guide: [],
			entrypointid: 110,
			viewerIndex: 0,
			sound: '',
		}
		this.loadEntry = this.loadEntry.bind(this)
		this.loadGuide = this.loadGuide.bind(this)
		this.entryChange = this.entryChange.bind(this)
		this.transit = this.transit.bind(this)
		this.play = this.play.bind(this)
		this.stop = this.stop.bind(this)
		this.checkPlaying = this.checkPlaying.bind(this)
		this.loadEntry()
		this.loadGuide(this.state.entrypointid)
	}
	
	componentWillUnmount() {
		this.checkPlaying();
	}

	loadEntry() {
		db.transaction((tx) => {
			tx.executeSql('SELECT entrypointid, entrypointdesc FROM tb_guide where language="minnan" group by entrypointid, entrypointdesc', 
				[], (tx, results) => {
				let { entry } = this.state;
				var len = results.rows.length;
				console.log(results);
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
			tx.executeSql('SELECT * FROM tb_guide where entrypointid=? order by seq', [entrypointid], (tx, results) => {
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
			});
		});    
	}

	entryChange(text) {
		let { entrypointid, guide } = this.state
		this.setState({
			entrypointid: text,
			viewerIndex: 0,
		})
		this.checkPlaying();
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

		this.checkPlaying();
		this.playSound(guide[viewerIndex].sound)
	}

	checkPlaying() {
		if (this.player) {
			this.stop();
		}
	}

	play(){
		if (!this.player) {
			this.playSound(this.state.sound)
		} else {
			this.stop();
		}
	}

	stop(){
		this.player.stop();
		this.player.release();
		delete this.player;
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

export default GuideMinnan
