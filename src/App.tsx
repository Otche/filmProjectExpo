import 'react-native-gesture-handler';
import React from "react";
import Search from "./components/Search";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FilmDetail from './components/filmDetail/FilmDetail';
import { Provider } from 'react-redux'
import Store from './redux/configureStore'
import Favorites from './components/Favorites';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search"
        options={{ title: 'Recherche' }} component={Search} />
      <Stack.Screen name="FilmDetail"
        options={{ title: 'Detail du film' }} component={FilmDetail} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Films" options={{ title: 'Films' }} component={Navigation} />
          <Tab.Screen name="Favoris" options={{ title: 'Favoris' }} component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
