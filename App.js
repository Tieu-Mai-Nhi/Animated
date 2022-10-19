import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Bell from './src/screens/Bell';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bell" screenOptions={{
        headerShown: false
      }}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Bell" component={Bell} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
});
