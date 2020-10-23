import * as React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import {Card, Header, HorizontalRow} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

export default function Home(props) {
  const {navigation} = props;
  return (
    <Screen>
      <View key="header">
        <Header
          headerLeft={<Icon name="menu" type="material-icons" size={20} />}
          noTitle
          {...props}
        />
      </View>
      <View key="content">
        <Card
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
          }}>
          <View
            style={{
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('../../assets/images/ic_route.png')} />
          </View>
          <View style={{width: '85%'}}>
            <AppText> 24, ocean Avenue </AppText>
            <HorizontalRow />
            <AppText onPress={() => navigation.navigate('Select address')} gray>
              i 'm going to
            </AppText>
          </View>
        </Card>
      </View>
      <View key="footer">
        <Button onPress={() => navigation.navigate('Arriving')}>Next</Button>
        <Button onPress={() => navigation.navigate('TripEnd')}>TripEnd</Button>
        <Button onPress={() => navigation.navigate('Ride details')}>
          Ride details
        </Button>
        <Button onPress={() => navigation.navigate('Driver details')}>
          Driver details
        </Button>
      </View>
    </Screen>
  );
}
