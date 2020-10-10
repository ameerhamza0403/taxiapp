import React, {useState} from 'react';
import {View,Switch,StyleSheet} from 'react-native';
import { Card, Header, RoundIcon } from '../../components';
import {AppText, Screen, Button} from '../../components/common';

const Profile = (props) => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };
  return (
    <Screen>
      <View key="header">
        <Header noTitle {...props} />
      </View>
      <View key="content">
        <View style={styles.contentContainer}>  
          <View style={styles.avatarContainer}></View>
          <AppText size= {20} bold onPress={()=>props.navigation.navigate('Profile')}>
            Carson
          </AppText>
          <Card style= {styles.card}>
            <View style={styles.cardRow}>
              <RoundIcon
                name="google"
                type="font-awesome"
                color="#fff"
                small
                size= {20}
              />
              <AppText style={styles.cardText}>03422100353</AppText>
            </View>
            <View style={styles.cardRow}>
              <RoundIcon
                name="google"
                type="font-awesome"
                color="#fff"
                small
                size= {20}
              />
              <AppText style={styles.cardText}>carson@mobility.com</AppText>
            </View>
            <View style={styles.cardRow}>
              <RoundIcon
                name="sc-facebook"
                type="evilicon"
                color="#fff"
                small
                size= {30}
              />
              <AppText style={styles.cardText}>@carsonmobility</AppText>
            </View>
          </Card>
        </View> 
        <View style= {styles.ntfContainer}>
          <View>
            <AppText bold>Notifications</AppText>
            <AppText>For receiving driver messages</AppText>
          </View>
          <View>
            <Switch
              onValueChange={toggleSwitch}
              value={switchValue}
            />
          </View>
        </View>
      </View>
      <View key = 'footer'>
        <Button bold>Delete Account</Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container:{flex: 1},
  contentContainer :{alignItems:'center'},
  avatarContainer:{height: 80,aspectRatio: 1,borderRadius: 50,borderWidth: 2},
  card:{height: '55%', padding :20, justifyContent: 'space-between'},
  cardRow :{flexDirection:'row', alignItems: 'center'},
  cardText :{flex:1,borderBottomWidth:0.5,marginStart :10, paddingBottom : 5},
  ntfContainer :{flex:1, width: '90%', flexDirection : 'row', alignItems: 'center',justifyContent : 'space-between', alignSelf :'center'},


});
export default Profile;
