import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

const AppText = (props) => {
  const {colors} = useTheme();
  const {
    children,
    heading,
    bold,
    secondary,
    primary,
    style,
    underline,
    size,
    center,
    right,
    color,
    white,
    gray,
    gray2,
    gray3,
  } = props;

  return (
    <Text
      {...props}
      style={[
        styles.TextStyle,
        style && style,
        heading && {fontSize: 30},
        bold && {fontWeight: 'bold'},
        color && {color},
        secondary && {color: colors.secondary},
        primary && {color: colors.primary},
        white && {color: colors.white},
        gray && {color: colors.gray},
        gray2 && {color: colors.gray2},
        gray3 && {color: colors.gray3},
        underline && {textDecorationLine: 'underline'},
        size && {fontSize: parseInt(size)},
        center && {textAlign: 'center'},
        right && {textAlign: 'right'},
      ]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 18,
    color: '#3E4958',
  },
});
export {AppText};
