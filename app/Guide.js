import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Alert } from 'react-native'
import Button from './register/Button'
import Input from './register/Input'
import ComboPicker from './register/Picker'
import GuideViewer from './register/GuideViewer'

var SQLite = require('react-native-sqlite-storage')
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~guide.db'})

class Guide extends Component {
	constructor() {
		super()
		this.state = {
			entry: [],
			guide: [],
			entrypointid: 1,
			viewerIndex: 0,
		}
		this.loadEntry = this.loadEntry.bind(this)
		this.loadGuide = this.loadGuide.bind(this)
		this.entryChange = this.entryChange.bind(this)
		this.transit = this.transit.bind(this)
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
				})
			});
		});    
	}

	entryChange(text) {
		let { entrypointid } = this.state
		this.setState({
			entrypointid: text,
			viewerIndex: 0,
		})
		this.loadGuide(text)
	}

	transit(){
		let { viewerIndex, guide } = this.state
		if (++viewerIndex > guide.length-1) {
			Alert.alert('導航結束！')
			viewerIndex = 0
		} 
		this.setState({
			viewerIndex: viewerIndex
		})
	}

	render () {
		let { entry, entrypointid, guide, viewerIndex } = this.state
		return (
			<View
				style={styles.container}>
				<ScrollView
					keyboardShouldPersistTaps='always'
					style={styles.content}>
					<ComboPicker
						selectValue={entrypointid}
						selectChange={(text)=>this.entryChange(text)}
						dataList={entry}
						label='入口' />
					<GuideViewer
						screenProps={{
				          entrypointid: entrypointid,
				          guide: guide,
				          transit: this.transit,
				          viewerIndex: viewerIndex
				        }} />
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

export default Guide
