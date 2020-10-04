import React, {useState} from 'react';
import {View} from 'react-native';
import {AppText, Screen, Button, Picker} from '../../components/common';

const Home = (props) => {
  return (
    <Screen>
      <View key="header"></View>
      <View key="content">
        <AppText>Home</AppText>
      </View>
    </Screen>
  );
};
export default Home;
