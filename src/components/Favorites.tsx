import React from 'react'
import { connect } from 'react-redux'
import { getFilmDetailFromApi, getImageFromApi } from '../api/TMDB';
import { FilmAppStore } from '../redux/reducers/favoriteReducer'
import FilmList from './FilmList';

const Favorites = ({ favoritesFilm, navigation, dispatch }: { favoritesFilm: any[], navigation: any, dispatch: any }) => {

    const displayDetailForFilm = async (idFilm: number) => {
        const filmDetail = favoritesFilm.find(item => item.id == idFilm);
        navigation.navigate("FavoriteFilmDetail", { filmDetail: { imageUrl: await getImageFromApi(filmDetail.poster_path), ...filmDetail } })
    }

    const toggleFavorite = async (idFilm: number) => {
        const action = { type: "TOGGLE_FAVORITE", value: await getFilmDetailFromApi(idFilm) }
        dispatch(action);
    }
    return (
        <FilmList
            films={favoritesFilm.map(
                (item) => {
                    return {
                        imageUrl: getImageFromApi(item.poster_path),
                        isFavorite: true,
                        ...item
                    }
                }
            )}
            displayDetailForFilm={displayDetailForFilm}
            toggleFavorite={toggleFavorite.bind(this)}
        />
    )
}

const mapStateToProps = (state: FilmAppStore) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}


export default connect(mapStateToProps)(Favorites);