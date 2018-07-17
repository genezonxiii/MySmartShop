import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Alert } from 'react-native'
import Button from './component/Button'
import Input from './component/Input'
import ComboPicker from './component/Picker'
import SwitchN from './component/SwitchN'

import { registers } from './component/theme'
import * as constants from './component/constants';

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
        idNo: '',
        gender: '',
        ageswitch: false,
      },
      occupationList: [],
      marriageList: [],
      ageList: [],
      genderList: [],
      dateList: {
        year: Array(100).fill().map((v, i) => {
          let now = new Date()
          let year = now.getFullYear()
          return i !== 0?{label: String(year - (99 - i)), value: String(year - (99 - i))}: 
            {label: '請選擇', value: String(-1)}
        }),
        month: Array(13).fill().map((v, i) => {
          return i !== 0?{label: String(this.zeroFill(i, 2)), value: String(this.zeroFill(i, 2))}: 
             {label: '請選擇', value: String(-1)}
        }),
        day: Array(32).fill().map((v, i) => {
          return i !== 0?{label: String(this.zeroFill(i, 2)), value: String(this.zeroFill(i, 2))}: 
            {label: '請選擇', value: String(-1)}
        }),
      }
    }
    this.registration=this.registration.bind(this)
    this.valid=this.valid.bind(this)
    this.required=this.required.bind(this)
  }

  componentWillMount() {
    this.getParameter('ocu')
    this.getParameter('mrg')
    this.getParameter('age')
    this.getParameter('gnd')
  }

  getParameter(kind) {
    let url = constants.HOST_SERVER + 'parameter/param?kind=' + kind
    fetch(url, {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let list = []
      responseJson.map((item)=> {
        list.push( {label: item.description, value: item.code} )
      })
      kind === 'ocu'? this.setOccupation(list):undefined
      kind === 'mrg'? this.setMarriage(list):undefined
      kind === 'age'? this.setAge(list):undefined
      kind === 'gnd'? this.setGender(list):undefined
    })    
  }

  setOccupation(list){
    this.setState({
      occupationList: list
    })
  }

  setMarriage(list){
    this.setState({
      marriageList: list
    })
  }

  setAge(list){
    this.setState({
      ageList: list
    })
  }

  setGender(list){
    this.setState({
      genderList: list
    })
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

  idNoChange (text) {
    this.setState({ register: { ...this.state.register, idNo: text } })
  }

  genderChange (text) {
    this.setState({ register: { ...this.state.register, gender: text } })
  }

  toggleAgeSwitch (value) {
    this.setState({ register: { ...this.state.register, ageswitch: value } })
  }

  validateAccountId (text) {
    var re = /^[A-Za-z0-9]+$/
    return re.test(text)
  }

  validateEmail (text) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(text);
  }

  validatePassword (text) {
    var re = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    return re.test(text);
  }

  validatePasswordMatch (text, textConfirm) {
    return text == textConfirm;
  }

  validateMobile (text) {
    var re = /^09\d{8}$/
    return re.test(text);
  }

  required() {
    const { register } = this.state
    let errorMsg = []
    register.accountId == ''?errorMsg.push(constants.REQUIRED_ACCOUNT_ID):undefined
    register.email == ''?errorMsg.push(constants.REQUIRED_EMAIL):undefined
    register.password == ''?errorMsg.push(constants.REQUIRED_PASSWORD):undefined
    register.passwordConfirm == ''?errorMsg.push(constants.REQUIRED_PASSWORD_CONFIRM):undefined
    register.username == ''?errorMsg.push(constants.REQUIRED_USERNAME):undefined
    register.idNo == ''?errorMsg.push(constants.REQUIRED_IDNO):undefined
    register.gender == ''?errorMsg.push(constants.REQUIRED_GENDER):undefined

    errorMsg.length > 0? Alert.alert('提示', errorMsg.join("\r\n")):this.valid()
  }

  valid () {
    const { register } = this.state
    let errorMsg = []
    !this.validateAccountId(register.accountId)? errorMsg.push(constants.ERROR_MSG_ACCOUNT_ID):undefined
    !this.validateEmail(register.email)? errorMsg.push(constants.ERROR_MSG_EMAIL):undefined
    !this.validatePassword(register.password)?errorMsg.push(constants.ERROR_MSG_PASSWORD_RULE):undefined
    !this.validatePasswordMatch(register.password, register.passwordConfirm)?
      errorMsg.push(constants.ERROR_MSG_PASSWORD_MATCH):undefined
    register.mobile!=='' && ! this.validateMobile(register.mobile)?
      errorMsg.push(constants.ERROR_MSG_MOBILE):undefined

    errorMsg.length > 0? Alert.alert('提示', errorMsg.join("\r\n")):this.registration()
  }

  registration () {
    const { register } = this.state
    let birthdate = register.birthYear === '' || register.birthMonth === '' || register.birthDay === ''?
      '':"".concat(register.birthYear, "-", register.birthMonth, "-", register.birthDay)
    const url = constants.HOST_SERVER + 'customer/registration'
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
        idNo: register.idNo,
        gender: register.gender,
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
            idNo: '',
            gender: '',
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

  renderNumbersofchildren() {
    return (
      <Input
        inputValue={this.state.register.numbersofchildren}
        inputChange={(text)=>this.numbersofchildrenChange(text)}
        label='子女數'
        placeholder='請輸入子女數' />
    )
  }

  renderAge() {
    let { register, ageList } = this.state
    return (
      <ComboPicker
        selectValue={register.age}
        selectChange={(text)=>this.ageChange(text)}
        dataList={ageList}
        label='年齡' />
    )
  }

  renderBirthday() {
    let { register, dateList } = this.state
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <ComboPicker
        selectValue={register.birthYear}
        selectChange={(text)=>this.birthYearChange(text)}
        dataList={dateList.year}
        label='　出生年份　' />
      <ComboPicker
        selectValue={register.birthMonth}
        selectChange={(text)=>this.birthMonthChange(text)}
        dataList={dateList.month}
        label='　　月份　　' />
      <ComboPicker
        selectValue={register.birthDay}
        selectChange={(text)=>this.birthDayChange(text)}
        dataList={dateList.day}
        label='　　日期　　' />
      </View>
    )
  }

  render () {
    const { register, occupationList, marriageList, genderList } = this.state

    return (
      <View
        style={registers.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'>
          <View style={registers.content}>
          <Input
            inputValue={register.accountId}
            inputChange={(text)=>this.accountIdChange(text)}
            label='帳號(必填)'
            placeholder='請輸入使用者帳號' />
          <Input
            inputValue={register.email}
            inputChange={(text)=>this.emailChange(text)}
            label='E-mail(必填)'
            placeholder='請輸入E-mail' />
          <Input
            inputValue={register.password}
            inputChange={(text)=>this.passwordChange(text)}
            passwordFlag={true}
            label='密碼(必填)'
            placeholder='請輸入密碼' />
          <Input
            inputValue={register.passwordConfirm}
            inputChange={(text)=>this.passwordConfirmChange(text)}
            passwordFlag={true}
            label='確認密碼(必填)'
            placeholder='請再次輸入密碼' />
          <Input
            inputValue={register.username}
            inputChange={(text)=>this.usernameChange(text)}
            label='姓名(必填)'
            placeholder='請輸入姓名' />
          <Input
            inputValue={register.idNo}
            inputChange={(text)=>this.idNoChange(text)}
            label='證件號碼(必填)'
            placeholder='請輸入身分證/護照' />
          <ComboPicker
            selectValue={register.gender}
            selectChange={(text)=>this.genderChange(text)}
            dataList={genderList}
            label='性別(必填)' />
          <Input
            inputValue={register.mobile}
            inputChange={(text)=>this.mobileChange(text)}
            label='手機'
            placeholder='請輸入手機' />
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
          { register.marriage === '1'? this.renderNumbersofchildren():undefined }
          <SwitchN
            valueChange={(value)=>this.toggleAgeSwitch(value)}
            value={register.ageswitch}
            hint='選擇年齡/出生年月日'
          />
          { register.ageswitch === false? this.renderAge() : this.renderBirthday() }
          <Button
            btnText='註冊'
            linearColor={['#828282', '#494646', '#393636']}
            underlayColor={'#464343'}
            onPress={this.required} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Register
