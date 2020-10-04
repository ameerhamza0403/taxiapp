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
  } = props;
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          justifyContent: 'center',
          height: 45,
          width: width || '100%',
          borderRadius: round ? 35 : 5,
          backgroundColor: background || 'white',
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
          color: color || 'black',
          fontSize: 20,
        }}>
        {children || 'Button'}
      </AppText>
    </TouchableOpacity>
  );
};

export {Button};
