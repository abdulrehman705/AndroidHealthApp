import React from 'react'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreen from './SignUpScreen'
import LoginScreen from './LoginScreen'
import CateogriesScreen from './CateogriesScreen'
const Stack = createNativeStackNavigator();

const Navigation =
  () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} 
          options={{ animation: 'slide_from_right' }}/>
          <Stack.Screen name="CateogriesScreen" component={CateogriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default Navigation