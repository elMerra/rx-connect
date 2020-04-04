import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDigtmu-OjN_IkCaB8FmHoxFXf2dFdFWQo",
  authDomain: "socialapp-d252f.firebaseapp.com",
  databaseURL: "https://socialapp-d252f.firebaseio.com",
  projectId: "socialapp-d252f",
  storageBucket: "socialapp-d252f.appspot.com",
  messagingSenderId: "858690778397",
  appId: "1:858690778397:web:7c652a9608478d8bd89df4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
},
   navigationOptions = {
   headerMode: 'none'
}
)

export default createAppContainer(
  createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Loading",
  },
  {
    navigationOptions: {
        header: null,}
  },
  {
    
  }
  
  )
)