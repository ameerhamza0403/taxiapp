import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Image, View, TextInput, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Card, Header, HorizontalRow, RoundIcon} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

export default function SelectAddress(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return (
    <Screen noPadding backgroundColor="#e5e5e5">
      <View
        key="header"
        style={{
          paddingHorizontal: 20,
        }}>
        <Header {...props} />
      </View>
      <View
        key="content"
        style={{
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 20,
          paddingVertical: 30,
          backgroundColor: 'white',
          marginTop: 50,
        }}>
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
            <AppText>24, ocean Avenue</AppText>
            <HorizontalRow />
            <TextInput
              style={{paddingVertical: 0}}
              placeholder={`i'm going to`}
              onSubmitEditing={() => navigation.navigate('Ride options')}
            />
          </View>
        </Card>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/images/ic_loc.png')} />
          <AppText primary>Show on a map</AppText>
        </View>
        <AppText gray bold>
          RECENT
        </AppText>
        {/* <Card
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Icon
            containerStyle={{width: '15%'}}
            name="search"
            type="evilicons"
            color={colors.primary}
          />
          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: 10,
            }}
          />
        </Card> */}
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              overflow: 'hidden',
              justifyContent: 'space-around',
              paddingVertical: 5,
            }}>
            <RoundIcon
              small
              name="location-on"
              type="material-icons"
              size={30}
              color={colors.gray}
            />
            <View>
              <AppText>Kings Cross Underground Statio...</AppText>
              <AppText gray>New York</AppText>
              <HorizontalRow />
            </View>
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}
