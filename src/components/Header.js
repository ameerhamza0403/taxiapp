/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

const Header = ({navigation}) => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 5,
      }}></View>
  );
};

export default Header;
