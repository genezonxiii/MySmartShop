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
    fontSize: 12,
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
    fontWeight: 'bold',
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
    lineHeight: 24,
  },
  image: {
    flex: 1,
  	width: '100%',
    height: 250,
    resizeMode: 'contain',
  },
  btnRow: {
    backgroundColor: '#3f3f3f',
    paddingTop: 5,
    paddingRight: 20,
    paddingBottom: 5,
    paddingLeft: 20,
    bottom: 0,
    width: '100%',
  },
  brand: {
    // color: '#444',
    // fontSize: 16,
    textAlign: 'center',
    color: '#967C4C',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
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
  itemStyle: {
    height: 44,
    fontSize: 18,
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
    flex: 1,
    width: '100%',
  },
  imageBottom: {
    flex: 1,
    resizeMode: 'contain'
  },
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    paddingTop: 5,
  }
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
    lineHeight: 24,
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

const switchns = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputLabel: {
    color: '#555',
    fontSize: 18,
    marginBottom: 5,
    display: 'flex',
  },
  switch: {
    
  },
});

const imageX = StyleSheet.create({
  image: {
    width: '100%',
    height: 225,
    marginBottom: 15,
  },
})

const voice = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 100,
    height: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 20,
    fontSize: 14,
  },
  result: {
    textAlign: 'center',
    color: '#967C4C',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
})

const blockViewer = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  brandBlock: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 5,
    fontSize: 18,
  },
  shopUrl: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
    fontSize: 18,
  },
  imageContainer: {
    paddingBottom: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#555',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
  },
})

const about = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingTop: 15,
    paddingRight: 30,
    paddingBottom: 15,
    paddingLeft: 30,    
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contain: {
    fontSize: 16,
  },
  youtube: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  youtubeBox: {
    marginBottom: 10,
  },
  floorContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  floorTitleBox: {
    marginBottom: 10,
    marginRight: 5,
    width: '40%',
  },
  floorBox: {
    marginBottom: 10,
    marginRight: 5,
    width: '20%',
  },
  imageContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  floor: {
    width: '100%',
    height: 550,
  },
  image: {
    width: '100%',
    height: 250,
  },
  bottomContainer: {
    flex: 1,
  },
  linearGradient: {
    borderRadius: 8,
  },
})

export { buttons, menus, guideViewers, 
  inputs, pickers, guides, 
  imageButtons, switchns,
  logins, registers, mains,
  privacys,
  products, 
  productViewers, productScanners,
  imageX, voice, blockViewer,
  about,
}