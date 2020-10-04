import React, {useState} from 'react';
import {View} from 'react-native';
import {AppText, Screen} from '../../components/common';

const DrawerMenu = (props) => {
  return (
    <Screen>
      <View key="header"></View>
      <View key="content">
        <AppText>Drawer Menu</AppText>
      </View>
    </Screen>
  );
};
export default DrawerMenu;
