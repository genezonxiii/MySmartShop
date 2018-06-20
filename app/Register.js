import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Alert } from 'react-native'
import Button from './register/Button'
import Input from './register/Input'
import ComboPicker from './register/Picker'

import { registers } from './register/theme'

class Register extends Component {

  constructor () {
    super()
    this.state = {
      register: {
        accountId: '',
        username: '',
        mobile: '',
        email: '',
        password: '',
        passwordConfirm: '',
        birthYear: '',
        birthMonth: '',
        birthDay: '',
        age: '',
        occupation: '',
        marriage: '',
        numbersofchildren: '',
      },
      occupationList: [
        {label: '程式設計師', value: '01'},
        {label: '教師', value: '02'},
        {label: '裁縫師', value: '03'},
        {label: '室內設計師', value: '04'},
        {label: '復健師', value: '05'},
      ],
      marriageList: [
        {label: '未婚', value: '0'},
        {label: '已婚', value: '1'},
      ],
      dateList: {
        year: Array(99).fill().map((v, i) => {
          let now = new Date()
          let year = now.getFullYear()
          return {label: String(year - (98 - i)), value: String(year - (98 - i))} 
        }),
        month: Array(12).fill().map((v, i) => {
          return {label: String(this.zeroFill(i+1, 2)), value: String(this.zeroFill(i+1, 2))} 
        }),
        day: Array(31).fill().map((v, i) => {
          return {label: String(this.zeroFill(i+1, 2)), value: String(this.zeroFill(i+1, 2))} 
        }),
      }
    }
    this.registration=this.registration.bind(this)
  }

  zeroFill ( number, width ) {
    width -= number.toString().length;
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }

  accountIdChange(text) {
    this.setState({ register: { ...this.state.register, accountId: text} })
  }

  usernameChange (text) {
    this.setState({ register: { ...this.state.register, username: text } })
  }

  mobileChange (text) {
    this.setState({ register: { ...this.state.register, mobile: text } })
  }

  emailChange (text) {
    this.setState({ register: { ...this.state.register, email: text } })
  }

  passwordChange (text) {
    this.setState({ register: { ...this.state.register, password: text } })
  }

  passwordConfirmChange (text) {
    this.setState({ register: { ...this.state.register, passwordConfirm: text } })
  }

  birthYearChange (text) {
    this.setState({ register: { ...this.state.register, birthYear: text } })
  }

  birthMonthChange (text) {
    this.setState({ register: { ...this.state.register, birthMonth: text } })
  }

  birthDayChange (text) {
    this.setState({ register: { ...this.state.register, birthDay: text } })
  }

  ageChange (text) {
    this.setState({ register: { ...this.state.register, age: text } })
  }

  occupationChange (text) {
    this.setState({ register: { ...this.state.register, occupation: text } })
  }

  marriageChange (text) {
    this.setState({ register: { ...this.state.register, marriage: text } })
  }

  numbersofchildrenChange (text) {
    this.setState({ register: { ...this.state.register, numbersofchildren: text } })
  }

  registration () {
    const { register } = this.state
    let birthdate = "".concat(register.birthYear, "-", register.birthMonth, "-", register.birthDay)
    const url = 'http://192.168.28.30:8080/SmartShop/customer/registration'
    fetch(url, {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accountId: register.accountId,
        username: register.username,
        password: register.password,
        mobile: register.mobile,
        email: register.email,
        birthdate: birthdate,
        age: register.age,
        occupation: register.occupation,
        marriage: register.marriage,
        numbersofchildren: register.numbersofchildren
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.accountId != '') {
        this.setState({
          register: {
            accountId: '',
            username: '',
            password: '',
            mobile: '',
            email: '',
            birthdate: '',
            age: '',
            occupation: '',
            marriage: '',
            numbersofchildren: '',
          }
        })
        this.navigate()
      }
    })
    .catch((error) => {
      Alert.alert('註冊失敗！');
    });
  }

  navigate () {
    Alert.alert('註冊成功!!')
    this.props.navigation.navigate('Home')
  }

  render () {
    const { register, occupationList, marriageList, dateList } = this.state

    return (
      <View
        style={registers.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={registers.content}>
          <Input
            inputValue={register.accountId}
            inputChange={(text)=>this.accountIdChange(text)}
            label='帳號'
            placeholder='請輸入使用者帳號' />
          <Input
            inputValue={register.email}
            inputChange={(text)=>this.emailChange(text)}
            label='E-mail'
            placeholder='請輸入E-mail' />
          <Input
            inputValue={register.username}
            inputChange={(text)=>this.usernameChange(text)}
            label='姓名'
            placeholder='請輸入姓名' />
          <Input
            inputValue={register.mobile}
            inputChange={(text)=>this.mobileChange(text)}
            label='手機'
            placeholder='請輸入手機' />
          <Input
            inputValue={register.password}
            inputChange={(text)=>this.passwordChange(text)}
            passwordFlag={true}
            label='密碼'
            placeholder='請輸入密碼' />
          <Input
            inputValue={register.passwordConfirm}
            inputChange={(text)=>this.passwordConfirmChange(text)}
            passwordFlag={true}
            label='確認密碼'
            placeholder='請再次輸入密碼' />
          <Input
            inputValue={register.age}
            inputChange={(text)=>this.ageChange(text)}
            label='年齡'
            placeholder='請輸入年齡' />
          <ComboPicker
            selectValue={register.occupation}
            selectChange={(text)=>this.occupationChange(text)}
            dataList={occupationList}
            label='職業' />
          <ComboPicker
            selectValue={register.marriage}
            selectChange={(text)=>this.marriageChange(text)}
            dataList={marriageList}
            label='婚姻' />
          <Input
            inputValue={register.numbersofchildren}
            inputChange={(text)=>this.numbersofchildrenChange(text)}
            label='子女數'
            placeholder='請輸入子女數' />
          <ComboPicker
            selectValue={register.birthYear}
            selectChange={(text)=>this.birthYearChange(text)}
            dataList={dateList.year}
            label='出生年份' />
          <ComboPicker
            selectValue={register.birthMonth}
            selectChange={(text)=>this.birthMonthChange(text)}
            dataList={dateList.month}
            label='出生月份' />
          <ComboPicker
            selectValue={register.birthDay}
            selectChange={(text)=>this.birthDayChange(text)}
            dataList={dateList.day}
            label='出生日期' />
          <Button
            btnText='註冊'
            linearColor={['#828282', '#494646', '#393636']}
            onPress={this.registration} />
        </ScrollView>
      </View>
    )
  }
}

export default Register
