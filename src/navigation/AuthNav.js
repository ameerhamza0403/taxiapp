/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';

const AuthScreen = createStackNavigator();
export const AuthNav = () => {
  return (
    <AuthScreen.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthScreen.Screen name="SignIn" component={SignIn} />
      <AuthScreen.Screen name="SignUp" component={SignUp} />
    </AuthScreen.Navigator>
  );
};
