import React, { Component } from 'react'
import { Platform } from 'react-native'

var SQLite = require('react-native-sqlite-storage')

// export function getConnection() {
// 	var db = undefined;
// 	if (Platform.OS === 'ios') {
// 	  db = SQLite.openDatabase({name: 'guide.db', createFromLocation: 1})
// 	} if (Platform.OS === 'android') {
// 	  db = SQLite.openDatabase({name: 'guide.190521.v2', createFromLocation: '~guide.db'})
// 	}
// 	return db;
// }

export default class Database  {
    getConnection() {
    	var db = undefined
		if (Platform.OS === 'ios') {
			db = SQLite.openDatabase({name: 'guide.db', createFromLocation: 1})
		} if (Platform.OS === 'android') {
			db = SQLite.openDatabase({name: 'guide.190521.v2', createFromLocation: '~guide.db'})
		}
        return db;
    }
}

module.exports = new Database();