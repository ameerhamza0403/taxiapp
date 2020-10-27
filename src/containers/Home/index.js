import * as React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Card, Header, HorizontalRow} from '../../components';
import {AppText, Button, Screen} from '../../components/common';

export default function Home(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.map}></View>
      <View style={styles.contentContainer}>
        <Header
          headerLeft={<Icon name="menu" type="material-icons" size={20} />}
          noTitle
          {...props}
        />
        <View style={styles.content}>
          <Card style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/images/ic_route.png')} />
            </View>
            <View style={styles.locationContainer}>
              <AppText> 24, ocean Avenue </AppText>
              <HorizontalRow />
              <AppText
                onPress={() => navigation.navigate('Select address')}
                gray>
                i 'm going to
              </AppText>
            </View>
          </Card>
        </View>
        <Button onPress={() => navigation.navigate('Arriving')}>
          Arriving
        </Button>
        <Button onPress={() => navigation.navigate('TripEnd')}>TripEnd</Button>
        <Button onPress={() => navigation.navigate('Ride details')}>
          Ride details
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Driver details')}>
          Driver details
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {flex: 1, paddingHorizontal: 20},
  content: {flex: 1},

  map: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  imageContainer: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationContainer: {
    width: '85%',
  },
  button: {
    marginBottom: 20,
  },
});
