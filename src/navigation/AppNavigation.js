import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { THEME } from '../theme'

const PostNavigator = createStackNavigator();
const BookedNavigator = createStackNavigator();
const BottomNavigator = 
  Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator()

const MainNavigator = createDrawerNavigator()

const navigatorOptions = {
  headerStyle: { backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff' },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
function MyPostNavigator() {
  return (
    <PostNavigator.Navigator initialRouteName={MainScreen} 
        screenOptions={navigatorOptions}>
          <PostNavigator.Screen name="Main" component={ MainScreen } options={MainScreen.navigationOptions}/>
          <PostNavigator.Screen name="Post" component={ PostScreen } options={PostScreen.navigationOptions}/>
          <PostNavigator.Screen name="About" component={ AboutScreen } />
        </PostNavigator.Navigator>
  )
}

function MyBookedNavigator() {
  return (
    <BookedNavigator.Navigator initialRouteName={BookedScreen}
          screenOptions={navigatorOptions}>
      <BookedNavigator.Screen name="Booked" component={ BookedScreen } options={BookedScreen.navigationOptions}/>
      <BookedNavigator.Screen name="Post" component={ PostScreen } options={PostScreen.navigationOptions}/>
    </BookedNavigator.Navigator>
  )
}


function MyBottomNavigator() {
  return (
    Platform.OS === 'android' ?
    <BottomNavigator.Navigator 
      initialRouteName='Post'
      activeTintColor='#fff'
      shifting= {true}
      barStyle={{backgroundColor: THEME.MAIN_COLOR}}
    >
      
      <BottomNavigator.Screen
        name='Post'
        component={MyPostNavigator} 
        options={{
          tabBarLabel: 'Все',
          tabBarIcon: info => (
              <Ionicons name='ios-albums' size={25} color={info.color} />
          )
        }}
      />

      <BottomNavigator.Screen 
        name='Booked'
        component={MyBookedNavigator}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: info => (
            <Ionicons name='ios-star' size={25} color={info.color} />
          )
        }}
      />

    </BottomNavigator.Navigator>

    : <BottomNavigator.Navigator 
       initialRouteName='Post'
        tabBarOptions={{
          activeTintColor: THEME.MAIN_COLOR,
        }}>
          
          <BottomNavigator.Screen
        name='Post'
        component={MyPostNavigator} 
        options={{
          tabBarLabel: 'Все',
          tabBarIcon: info => (
              <Ionicons name='ios-albums' size={25} color={info.color} />
          )
        }}
      />

      <BottomNavigator.Screen 
        name='Booked'
        component={MyBookedNavigator}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: info => (
            <Ionicons name='ios-star' size={25} color={info.color} />
          )
        }}
      />

    </BottomNavigator.Navigator>
  )
}

function MyDrawer(){
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name='PostTabs' component={MyBottomNavigator} />
      <MainNavigator.Screen name='About' component={AboutScreen} />
      <MainNavigator.Screen name='Create' component={CreateScreen} />
    </MainNavigator.Navigator>
  )
}
function AppNavigation() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;