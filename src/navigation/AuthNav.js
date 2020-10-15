/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import VerifyCode from '../containers/VerifyCode';
import Onboarding from '../containers/Onboarding';
import SignUpOption from '../containers/SignUpOption';

const AuthScreen = createStackNavigator();
export const AuthNav = () => {
  return (
    <AuthScreen.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <AuthScreen.Screen name="Onboarding" component={Onboarding} />
      <AuthScreen.Screen name="SignUpOption" component={SignUpOption} />
      <AuthScreen.Screen name="SignIn" component={SignIn} />
      <AuthScreen.Screen name="SignUp" component={SignUp} />
      <AuthScreen.Screen name="VerifyCode" component={VerifyCode} />
    </AuthScreen.Navigator>
  );
};
