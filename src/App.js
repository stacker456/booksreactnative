import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from '../store';

import {enableScreens} from 'react-native-screens';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
