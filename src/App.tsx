import 'react-native-gesture-handler';
import React from "react";
import Search from "./components/Search";
import { StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FilmDetail from './components/filmDetail/FilmDetail';
import { Provider } from 'react-redux'
import Store from './redux/configureStore'
import Favorites from './components/Favorites';

const Stack = createStackNavigator();

function SearchNavigation() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search"
        options={{ title: 'Recherche' }} component={Search} />
      <Stack.Screen name="FilmDetail"
        options={{ title: 'Detail du film' }} component={FilmDetail} />
    </Stack.Navigator>
  );
}

function FavoritesNavigation() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search"
        options={{ title: 'Recherche' }} component={Favorites} />
      <Stack.Screen name="FavoriteFilmDetail"
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
          <Tab.Screen name="Films" options={{
            title: 'Film',
            tabBarIcon: () => {
              return <Image
                source={require('./assets/ic_search.png')}
                style={styles.icon} />
            }
          }} component={SearchNavigation} />
          <Tab.Screen name="Favoris" options={{
            title: 'Favoris',
            tabBarIcon: () => {
              return <Image
                source={require('./assets/ic_favorite.png')}
                style={styles.icon} />
            }
          }} component={FavoritesNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
