import React from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;
