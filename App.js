import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers';
import {NavigationContainer} from '@react-navigation/native'
import Page from './screen/Route';

const store = createStore(reducer, {}, applyMiddleware(Thunk))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
         <Page/>
        </NavigationContainer>
    </Provider>
  );
}


