import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Gallery from './components/Gallery';
import Picture from './components/Picture';
import {mainReducer} from './reducer/reducers';
import thunk from 'redux-thunk';

const store = createStore(mainReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

export default function App() {

  return (  
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Picture" component={Picture} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

