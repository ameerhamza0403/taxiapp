import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {AppText} from './AppText';

const Button = (props) => {
  const {
    children,
    color,
    onPress,
    background,
    width,
    style,
    round,
    fontSize,
    secondary,
    primary,
    borderRadius,
    bold,
  } = props;
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          justifyContent: 'center',
          height: 60,
          width: width || '100%',
          borderRadius: round ? 35 : 15,
          backgroundColor: background || colors.primary,
        },
        borderRadius && {borderRadius: parseInt(borderRadius)},
        primary && {backgroundColor: colors.primary},
        secondary && {backgroundColor: colors.secondary},
        style,
      ]}
      onPress={onPress}>
      <AppText
        size={fontSize}
        style={{
          textAlign: 'center',
          color: color || 'white',
          fontSize: 20,
        }}
        bold={bold}>
        {children || 'Button'}
      </AppText>
    </TouchableOpacity>
  );
};

export {Button};
