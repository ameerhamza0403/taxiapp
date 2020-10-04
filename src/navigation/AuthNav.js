/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../containers/SignIn';

const AuthScreen = createStackNavigator();
export const AuthNav = () => {
  return (
    <AuthScreen.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthScreen.Screen name="SignIn" component={SignIn} />
    </AuthScreen.Navigator>
  );
};
