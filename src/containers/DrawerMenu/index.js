/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {AppText, Screen} from '../../components/common';

const DrawerMenu = (props) => {
  return (
    <Screen>
      <View key="header" />
      <View key="content">
        <AppText>Drawer Menu</AppText>
      </View>
    </Screen>
  );
};
export default DrawerMenu;
