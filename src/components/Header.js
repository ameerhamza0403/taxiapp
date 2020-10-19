/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {Icon} from 'react-native-elements';
import {AppText} from './common';
import {useTheme} from '@react-navigation/native';

const Header = (props) => {
  const {colors} = useTheme();
  const {
    navigation,
    title,
    color,
    primary,
    route: {name},
    headerLeft,
    headerRight,
    noTitle,
  } = props;
  const headerColor = color || (primary && colors.primary) || colors.secondary;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.backIconContainer}>
          {headerLeft ? (
            headerLeft
          ) : (
            <Icon
              onPress={() => navigation.goBack()}
              name="keyboard-arrow-left"
              type="material-icons"
              size={35}
            />
          )}
        </View>
      </View>

      {!noTitle && (
        <View style={{flex: 4}}>
          <AppText bold size={30} center color={headerColor}>
            {title || name}
          </AppText>
        </View>
      )}
      <View style={{flex: 1}}>{headerRight}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 5,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backIconContainer: {
    width: 45,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 3,
    opacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.51,
  },
});
export {Header};
