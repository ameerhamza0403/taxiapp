/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView} from 'react-native';
import {AppText, Screen} from '../../components/common';
import {useTheme} from '@react-navigation/native';

const DrawerMenu = (props) => {
  const {colors} = useTheme();
const {navigation : {navigate}} = props;
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          flex: 2,
          backgroundColor: colors.primary,
          justifyContent: 'flex-end',
          paddingHorizontal: 40,
        }}>
        <View
          style={{
            height: 100,
            aspectRatio: 1,
            borderRadius: 50,
            borderWidth: 2,
          }}></View>
        <AppText white bold size={20} style={{marginVertical:3}} onPress={()=>navigate('Profile')}>
          Carson
        </AppText>
        <AppText white size={20} style={{marginVertical:3}}>email</AppText>
      </View>
      <View
        style={{
          flex: 3,
          padding: 40,
        }}>
        <AppText bold style={{marginVertical: 10}}>
          RIDE HISTORY
        </AppText>
        <AppText bold style={{marginVertical: 10}}>
          PAYMENT
        </AppText>
        <AppText bold style={{marginVertical: 10}}>
          PROMO CODE
        </AppText>
        <AppText  onPress={()=>navigate('Support')} bold style={{marginVertical: 10}}>
          SUPPORT
        </AppText>
      </View>
      <View style={{flex: 1, paddingHorizontal: 40, justifyContent: 'center'}}>
        <AppText onPress={()=>navigate('SignIn')} underline primary>
          Sign out
        </AppText>
      </View>
    </ScrollView>
  );
};
export default DrawerMenu;
