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
    headerRight,noTitle
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
            name="arrow-left"
            type="ionicons"
            size= {30}
            containerStyle={styles.backIconContainer}
          />
        )}
      </View>

      {!noTitle && <View style={{flex: 4}}>
        <AppText bold size={30} center color={headerColor}>
          {title || name}
        </AppText>
      </View>}
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
  backIconContainer :{
    // borderWidth: 1,
    aspectRatio: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 0,
   },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

elevation: 1,
  }
});
export {Header};
