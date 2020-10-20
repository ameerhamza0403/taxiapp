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

import {Card, Header, HorizontalRow, RoundIcon} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

export default function RideOptions(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return (
    <Screen noPadding backgroundColor="#e5e5e5">
      <View
        key="content"
        style={{
          paddingHorizontal: 20,
        }}>
        <Header {...props} />
      </View>
      <View
        key="footer"
        style={{
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 20,
          paddingVertical: 30,
          backgroundColor: 'white',
        }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3]}
          renderItem={() => {
            return (
              <Card
                style={{
                  width: 120,
                  margin: 10,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Image source={require('../../assets/images/standard.png')} />
                <AppText>Standard</AppText>
                <AppText bold>Price</AppText>

                <AppText
                  style={{
                    backgroundColor: 'silver',
                    borderRadius: 20,
                    paddingHorizontal: 5,
                  }}
                  bold>
                  3 mins
                </AppText>
              </Card>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <AppText>Estimated time trip</AppText>
            <AppText primary>24 mins</AppText>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image source={require('../../assets/images/ic_mastercard.png')} />
            <AppText>****</AppText>
            <AppText>8295</AppText>
          </View>
        </View>
        <Button>Book ride</Button>
      </View>
    </Screen>
  );
}
