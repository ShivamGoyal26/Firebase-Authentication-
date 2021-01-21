import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';



const stack = createStackNavigator();

const AppStack = props =>
    <NavigationContainer>
        <stack.Navigator >
            <stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <stack.Screen name="chat" component={ChatScreen} options={{ headerShown: false }} />
        </stack.Navigator>
    </NavigationContainer>

export default AppStack;