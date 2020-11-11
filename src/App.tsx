import 'react-native-gesture-handler';
import React from "react";
import Search from "./components/Search";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FilmDetail from './components/filmDetail/FilmDetail';
import { Provider } from 'react-redux'
import Store from './redux/configureStore'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen name="Search"
            options={{ title: 'Recherche' }} component={Search} />
          <Stack.Screen name="FilmDetail"
            options={{ title: 'Detail du film' }} component={FilmDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
