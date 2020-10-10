import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';


const Card = (props) => {
  const {
    children,style
  } = props;
  return (
   <View style= {[{
      alignSelf:'center',
      borderRadius: 10,
      backgroundColor: '#ffffff',
      elevation: 3,
      opacity: 1,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.23,
      shadowRadius: 1.51},style]}>
      {children}
   </View>
  );
};

export {Card};
