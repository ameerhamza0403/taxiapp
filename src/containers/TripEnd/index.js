import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';

import {
  Card,
  Header,
  HorizontalRow,
  RoundIcon,
  RouteDetails,
} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

export default function TripEnd(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return (
    <Screen>
      <View key="header">
        <Header
          {...props}
          noTitle
          headerLeft={<Icon name="menu" type="material-icons" />}
        />
      </View>
      <View
        key="content"
        style={{
          height: '90%',
        }}>
        <Card
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <RoundIcon
            name="check"
            type="feather"
            size={25}
            color={colors.primary}
          />
          <AppText style={{marginBottom: 30}} bold>
            Your trip has ended
          </AppText>
          <RouteDetails />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.background,
              marginTop: 10,
              borderRadius: 10,
              padding: 15,
            }}>
            <View>
              <Image
                source={require('../../assets/images/ic_mastercard.png')}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <AppText>{`**** 8295`} </AppText>
              <AppText>$7</AppText>
            </View>
          </View>
        </Card>
      </View>
      <View key="footer">
        <Button>Ok</Button>
      </View>
    </Screen>
  );
}
