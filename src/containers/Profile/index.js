import React, {useState} from 'react';
import {View} from 'react-native';
import { Header } from '../../components';
import {AppText, Screen, Button, Picker} from '../../components/common';

const Profile = (props) => {
  return (
    <Screen>
      <View key="header">
      <Header noTitle {...props} />
      </View>
      <View key="content">
         <View  style={{
          alignItems:'center'
          }}>  
            <View
          style={{
            height: 100,
            aspectRatio: 1,
            borderRadius: 50,
            borderWidth: 2,
          }}></View>
        <AppText  bold onPress={()=>props.navigation.navigate('Profile')}>
          Carson
        </AppText>
        </View> 
      </View>
      <View key = 'footer'>
          <Button bold >
            Delete Account
          </Button>
      </View>
    </Screen>
  );
};
export default Profile;
