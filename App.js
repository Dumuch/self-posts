import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
import { Provider } from 'react-redux';

import { bootsrap } from './src/bootstrap';

import { AppNavigation } from './src/navigation/AppNavigation'

import store from './src/store';

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (isReady) {
    return <AppLoading
      startAsync={bootsrap}
      onFinish={() => setIsReady(true)}
      onError={error => console.log(error)} />
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}