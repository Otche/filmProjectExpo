import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import FilmItem from './FilmItem'

const FilmList = ({ films, toggleFavorite, displayDetailForFilm, loadFilms, page, totalPages }:
    { films: any[], toggleFavorite: Function, displayDetailForFilm: Function, loadFilms?: Function, page?: number, totalPages?: number }) => {

    return (
        <FlatList
            data={films}
            keyExtractor={(film) => film.id.toString()}
            renderItem={({ item }) => {
                return (<FilmItem isFavorite={item.isFavorite}
                    toggleFavorite={toggleFavorite}
                    onPress={displayDetailForFilm}
                    film={item} />)
            }}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (page && totalPages) {
                    if (page < totalPages) {
                        if (loadFilms) loadFilms();
                    }
                }
            }}
        />
    )
}

export default FilmList