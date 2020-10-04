import React, {useState} from 'react';
import {View} from 'react-native';
import {AppText, Screen} from '../../components/common';

const SignIn = (props) => {
  return (
    <Screen>
      <View key="header"></View>
      <View key="content">
        <AppText>SignIn</AppText>
      </View>
    </Screen>
  );
};
export default SignIn;
