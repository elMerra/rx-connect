import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import MessageScreen from './screens/MessageScreen'

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

const AppTabNavigator = createBottomTabNavigator(
   {
        Home: {
          screen: HomeScreen,
          navigationOptions:{
             tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}/>
          }
        },
        Imagenes: {
          screen: PostScreen,
          navigationOptions:{
             tabBarIcon: ({tintColor}) => <Ionicons name="ios-images" size={24} color={tintColor}/>
          }
        },
        Perfil: {
          screen: ProfileScreen,
          navigationOptions:{
             tabBarIcon: ({tintColor}) => <Ionicons name="ios-contact" size={24} color={tintColor}/>
          }
        },
        Contacto: {
          screen: MessageScreen,
          navigationOptions:{
             tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}/>
          }
        },
   },
   {}
)
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
    App: AppTabNavigator,
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