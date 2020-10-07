/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, Button, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import {useTheme} from '@react-navigation/native';

import {AppText} from './common/AppText';

const Keyboard = (props) => {
  const {colors} = useTheme();
  const alphabet = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    <Icon name="menu" type="feather" />,
    '0',
    <Icon name="menu" type="feather" />,
  ];
  // const {
  //   viewStyle,
  //   label,
  //   inputRef,
  //   maxLength,
  //   secondary,
  //   primary,
  //   bold,
  // } = props;
  const keyboard = alphabet.map((letter, index) => (
    <TouchableOpacity onPress={() => props.onPress(letter)} style={styles.btn}>
      <AppText bold center size={35}>
        {letter}
      </AppText>
    </TouchableOpacity>
  ));
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>{keyboard}</View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 60,
    width: '33%',
    borderColor: '#D5DDE0',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
export {Keyboard};
