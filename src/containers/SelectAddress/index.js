import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Image, View, TextInput, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Card, Header, HorizontalRow, RoundIcon} from '../../components';
import {AppText, Screen} from '../../components/common';

export default function SelectAddress(props) {
  const {colors} = useTheme();
  const {navigation} = props;
  return (
    <Screen noPadding backgroundColor="#e5e5e5">
      <View key="header" style={styles.header}>
        <Header {...props} />
      </View>
      <View key="content" style={styles.bottomSheet}>
        <Card style={styles.addressCard}>
          <View style={styles.addressCardImage}>
            <Image source={require('../../assets/images/ic_route.png')} />
          </View>
          <View style={{width: '85%'}}>
            <AppText>24, ocean Avenue</AppText>
            <HorizontalRow />
            <TextInput
              style={styles.textInput}
              placeholder={`i'm going to`}
              onSubmitEditing={() => navigation.navigate('Ride options')}
            />
          </View>
        </Card>
        <View style={styles.showOnMapContainer}>
          <Image source={require('../../assets/images/ic_loc.png')} />
          <AppText primary>Show on a map</AppText>
        </View>

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
        <AppText gray bold>
          RECENT
        </AppText>
        <ScrollView>
          <View style={styles.recentAddress}>
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
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
  },
  bottomSheet: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
    marginTop: 50,
  },
  addressCard: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  addressCardImage: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingVertical: 0,
  },
  showOnMapContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  recentAddress: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    overflow: 'hidden',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
});
