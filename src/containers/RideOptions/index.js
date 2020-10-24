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
      <View key="content" style={styles.header}>
        <Header {...props} />
      </View>
      <View key="footer" style={styles.bottomSheet}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3]}
          keyExtractor={(num) => num.toString()}
          renderItem={() => {
            return (
              <Card style={styles.carCard}>
                <Image source={require('../../assets/images/standard.png')} />
                <AppText>Standard</AppText>
                <AppText bold>Price</AppText>

                <AppText style={styles.time} bold>
                  3 mins
                </AppText>
              </Card>
            );
          }}
        />
        <View style={styles.detailsContainer}>
          <View>
            <AppText>Estimated time trip</AppText>
            <AppText primary>24 mins</AppText>
          </View>
          <View style={styles.creditCard}>
            <Image source={require('../../assets/images/ic_mastercard.png')} />
            <AppText>****</AppText>
            <AppText>8295</AppText>
          </View>
        </View>
        <Button onPress={() => navigation.navigate('DriverSearch')}>
          Book ride
        </Button>
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
  },
  carCard: {
    width: 120,
    margin: 10,
    alignItems: 'center',
    padding: 10,
  },
  time: {
    backgroundColor: 'silver',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditCard: {
    flexDirection: 'row',
  },
});
