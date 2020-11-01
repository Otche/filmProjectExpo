
// Components/Search.js

import React from 'react'
import {
  StyleSheet, View, TextInput,
  Button, FlatList, ActivityIndicator
} from 'react-native'
import { getFilmsFromApiWithSearchedText, getImageFromApi } from '../api/TMDB';
import { Film } from '../types/film.type';
import FilmItem from './FilmItem'

export class Search extends React.Component<{}, { films: Film[], isLoading: boolean }> {
  private searchedText?: string;
  private page = 0;
  private totalPages = 0;

  constructor(props: any) {
    super(props)

    this.state = { films: [], isLoading: false }

  }

  private searchFilm() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: []
    }, () => {
      console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
      this.loadFilms()
    })

  }

  private loadFilms() {
    if (this.searchedText && this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide

      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(data => {
        this.page = data.page
        this.setState({
          films: [...this.state.films, ...data.results
            .map((film: any) => {
              return { imageUrl: getImageFromApi(film.poster_path), ...film }
            })],
          isLoading: false
        })
      });
    }
  }

  private searchTextInputChanged(text: string) {
    this.searchedText = text
  }

  render() {
    console.log("RENDER");
    console.log(this.state.isLoading);
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'
          onChangeText={(text) => this.searchTextInputChanged(text)}
          onSubmitEditing={() => this.loadFilms()} />
        <Button title='Rechercher' onPress={() => this.searchFilm()} />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem item={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages) {
              this.loadFilms()
            }
          }}
        />
        { this.state.isLoading ?
          <View style={styles.loading_container}>
            <ActivityIndicator
              animating={true}
              color={"#00000"}
              style={{ opacity: 1 }} />
          </View> : null}
      </View>)
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }, loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search

/**/