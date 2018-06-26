import {StyleSheet} from 'react-native';

const buttons = StyleSheet.create({
  buttonContainer: {
  },
  button: {
    borderWidth: 3,
    borderColor: '#312C2C',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    padding: 12,
    textAlign: 'center',
    textDecorationLine: 'none',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    borderRadius: 8,
  }
})

const menus = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
});

const imageButtons = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    borderColor: '#bbb',
  },
  buttonBorder: {
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  buttonBorderRight: {
    borderTopWidth: 1,
  },
  center: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    marginBottom: 10,
  },
});

const guideViewers = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
  },
  pageStyle: {
  },
  locationTitle: {
    color: '#333',
    fontSize: 26,
    fontWeight: '200',
    margin: 0,
    marginBottom: 10,
    padding: 0,
    textAlign: 'center',
  },
  directionInfo: {
    marginTop: -50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  directionInfoH3: {
    backgroundColor: '#967c4c',
    color: '#fff',
    fontSize: 24,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  directionInfoP: {
    color: '#444',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
  	width: '100%',
    height: 250,
  },
  btnRow: {
    backgroundColor: '#3f3f3f',
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    bottom: 0,
    width: '100%',
  }
});

const privacys = StyleSheet.create({
  container: {
    flex: 1,
  },
  web: {
    height: 100,
  },
  containerStyle: {
    backgroundColor: '#443F3F',
    borderWidth: 0,
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    borderRadius: 0,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  chkTextStyle: {
    fontSize: 18,
    color: '#fff',
  },
  btnRow: {
    backgroundColor: '#3f3f3f',
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    bottom: 0,
    width: '100%',
  }
});

const inputs = StyleSheet.create({
  inputWrap: {
    marginBottom: 15,
  },
  inputText: {
    backgroundColor: '#D8D8D8',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#C8C8C8',
    borderRadius: 5,
    fontSize: 18,
    padding: 8,
  },
  inputLabel: {
    color: '#555',
    fontSize: 18,
    marginBottom: 5,
    display: 'flex',
  },
})

const pickers = StyleSheet.create({
  pickerWrap: {
    marginBottom: 15,
  },
  container: {
    borderWidth: 1,
    borderColor: '#C8C8C8',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#D8D8D8',
  },
  picker: {
  },
  item: {
    backgroundColor: 'lightgrey', 
    marginLeft: 0, 
    paddingLeft: 15,
  },
  inputLabel: {
    color: '#555',
    fontSize: 18,
    marginBottom: 5,
  },
})

const guides = StyleSheet.create({
  container: {
    flex: 1
  },
})

const logins = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  content: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 24,
    paddingBottom: 24,
  }
})

const registers = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 24,
    paddingBottom: 24,
  }
})

const products = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
})

const mains = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  image: {
    width: '100%',
    height: 250,
  },
})

const productViewers = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
    alignSelf: 'center'
  },
  directionInfo: {
    marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  directionInfoH3: {
    backgroundColor: '#967c4c',
    color: '#fff',
    fontSize: 24,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  directionInfoP: {
    color: '#444',
    fontSize: 16,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  image: {
    width: '100%',
    height: 250,

  },
  video: {
    width: '90%',
    marginTop: 10,
  },
});

const productScanners = StyleSheet.create({
  centerText: {
    fontSize: 18,
    color: '#777', 
    textAlign: 'center',   
  },
  cameraStyle: {

  },
  top: {
    width: '100%',
  },
  btnRow: {
    backgroundColor: '#3f3f3f',
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    bottom: 0,
    width: '100%',
  },
});

export { buttons, menus, guideViewers, 
  inputs, pickers, guides, 
  imageButtons,
  logins, registers, mains,
  privacys,
  products, 
  productViewers, productScanners,
}