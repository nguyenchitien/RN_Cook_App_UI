import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from './src/screens/intro/IntroScreen';
import HomeScreen from './src/screens/home/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroScreen"
          options={{headerShown: false}}
          component={IntroScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
