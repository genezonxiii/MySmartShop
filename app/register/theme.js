import {StyleSheet} from 'react-native';

const buttons = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submit: {
    color: '#666666',
    fontWeight: '600'
  }
})

const menus = StyleSheet.create({
  item: {
    padding: 5,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .3)',
    borderBottomWidth: 1
  },
  text: {
    color: '#ffe81f',
    fontSize: 28
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  item2: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .3)',
    borderRightWidth: 1,
    backgroundColor: 'white',
  },
});

const guideViewers = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
    alignSelf: 'center'
  },
  image: {
  	width: 300, 
  	height: 200,
  }
});

const inputs = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  },
  textLabel: {

  },
})

const pickers = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
   textLabel: {

   },
})

const guides = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  content: {
    flex: 1
  }
})

const logins = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  content: {
    flex: 1
  }
})

const registers = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  content: {
    flex: 1
  }
})

export { buttons, menus, guideViewers, inputs, pickers, guides, logins, registers }