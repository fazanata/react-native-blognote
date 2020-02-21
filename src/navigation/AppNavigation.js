import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { THEME } from '../theme'

const PostNavigator = createStackNavigator();

function AppNavigation() {
    return (
      <NavigationContainer>
        <PostNavigator.Navigator initialRouteName={MainScreen} 
        screenOptions ={{
            headerStyle: { backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff' },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
            }}>
          <PostNavigator.Screen name="Main" component={ MainScreen } options={MainScreen.navigationOptions}/>
          <PostNavigator.Screen name="Post" component={ PostScreen } options={PostScreen.navigationOptions}/>
          <PostNavigator.Screen name="About" component={ AboutScreen } />
        </PostNavigator.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;