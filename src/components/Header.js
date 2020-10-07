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
    secondary,
    primary,
    route: {name},
    headerLeft,
    headerRight,
  } = props;
  const headerColor = color || (primary && colors.primary) || colors.secondary;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        {headerLeft ? (
          headerLeft
        ) : (
          <Icon
            onPress={() => navigation.goBack()}
            color={headerColor}
            name="menu"
            type="feather"
            containerStyle={{
              // borderWidth: 1,
              aspectRatio: 1,
              width: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              shadowRadius: 4,
              shadowOffset: {
                width: 1,
                height: 4,
              },
              shadowColor: '#FFF',
              elevation: 1,
            }}
          />
        )}
      </View>

      <View style={{flex: 4}}>
        <AppText bold size={30} center color={headerColor}>
          {title || name}
        </AppText>
      </View>
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
});
export {Header};
