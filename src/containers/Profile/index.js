import React, {useState} from 'react';
import {View} from 'react-native';
import { Card, Header, RoundIcon } from '../../components';
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
            height: 80,
            aspectRatio: 1,
            borderRadius: 50,
            borderWidth: 2,
          }}></View>
        <AppText size= {20} bold onPress={()=>props.navigation.navigate('Profile')}>
          Carson
        </AppText>
        <View style= {{width: '90%', height: '55%', borderRadius: 10, padding :20,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        elevation: 3,
        opacity: 1,
        shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.23,
      shadowRadius: 1.51,
   
    }}>

        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <RoundIcon
            name="google"
            type="font-awesome"
            color="#fff"
            small
            size= {20}
          />
          <View style= {{flex:1,borderBottomWidth:0.5,marginStart :10, paddingBottom : 5}}>
            <AppText>03422100353</AppText>
          </View>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <RoundIcon
            name="google"
            type="font-awesome"
            color="#fff"
            small
            size= {20}
          />
          <View style= {{flex:1,borderBottomWidth:0.5,marginStart :10, paddingBottom : 5}}>
            <AppText>carson@mobility.com</AppText>
          </View>
        </View>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
          <RoundIcon
            name="sc-facebook"
            type="evilicon"
            color="#fff"
            small
            size= {30}
          />
          <View style= {{flex:1,borderBottomWidth:0.5,marginStart :10, paddingBottom : 5}}>
            <AppText>@carsonmobility</AppText>
          </View>
        </View>
      </View>
    </View> 
   <View style= {{flex:1, width: '90%', flexDirection : 'row', alignItems: 'center', alignSelf :'center', paddingHorizontal: 10}}>
     <View style= {{flex:5}}>
       <AppText bold>Notifications</AppText>
       <AppText>For receiving driver messages</AppText>
     </View>
     <View  style= {{flex:1}}>
     <AppText>Switch</AppText>
       </View>
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
