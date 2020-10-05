/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {AppText} from './common/AppText';

const InputWithLabel = (props) => {
  const {colors} = useTheme();

  const {
    viewStyle,
    label,
    inputRef,
    maxLength,
    secondary,
    primary,
    bold,
  } = props;

  return (
    <View style={[styles.inputContainerStyle, viewStyle]}>
      {label && (
        <AppText bold={bold} secondary={secondary} primary={primary}>
          {`${label} ` || 'Label Name'}
        </AppText>
      )}
      <TextInput
        {...props}
        ref={(r) => {
          inputRef && inputRef(r);
        }}
        maxLength={maxLength}
        style={styles.inputFieldStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    paddingBottom: 5,
    width: '100%',
  },
  inputFieldStyle: {
    marginBottom: 10,
    height: 44,
    paddingVertical: 3,
    paddingLeft: 15,
    borderRadius: 15,
    borderWidth: 0.5,
    fontSize: 20,
    backgroundColor: '#F7F8F9',
    borderColor: '#D5DDE0',
  },
});
export {InputWithLabel};
