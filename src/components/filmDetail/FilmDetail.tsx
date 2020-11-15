import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Genre, ProductionCompanie } from '../../types/film.type';
import moment from 'moment';
import { FilmAppStore } from '../../redux/reducers/favoriteReducer';
import { connect } from 'react-redux';
const numeral = require('numeral');
const sourceImageBorder = require('../assets/ic_favorite_border.png');
const sourceImage = require('../assets/ic_favorite.png');

export const FilmDetail = ({ route, dispatch, favoritesFilm }: { route: any, dispatch: any, favoritesFilm: any }) => {
    const { filmDetail } = route.params;

    const toggleFavorite = () => {
        const action = { type: "TOGGLE_FAVORITE", value: filmDetail }
        dispatch(action);
    }


    const displayFavoriteImage = () => {
        const isFavorite = favoritesFilm.findIndex((item: any) => item.id === filmDetail.id) !== -1;
        return (
            <Image
                style={styles.favorite_image}
                source={isFavorite ? sourceImage : sourceImageBorder}
            />
        )
    }


    return (
        <ScrollView style={styles.scrollview_container}>
            {<Image
                style={styles.image}
                source={{ uri: filmDetail.imageUrl }}
            />}
            <Text style={styles.title_text}>{filmDetail.title}</Text>
            <TouchableOpacity
                style={styles.favorite_container}
                onPress={() => toggleFavorite()}>
                {displayFavoriteImage()}
            </TouchableOpacity>
            <Text style={styles.description_text}>{filmDetail.overview}</Text>
            <Text style={styles.default_text}>Sorti le {moment(new Date(filmDetail.release_date)).format('DD/MM/YYYY')}</Text>
            <Text style={styles.default_text}>Note : {filmDetail.vote_average} / 10</Text>
            <Text style={styles.default_text}>Nombre de votes : {filmDetail.vote_count}</Text>
            <Text style={styles.default_text}>Budget : {numeral(filmDetail.budget).format('0,0[.]00 $')}</Text>
            <Text style={styles.default_text}>Genre(s) : {filmDetail.genres.map(function (genre: Genre) {
                return genre.name;
            }).join(" / ")}
            </Text>
            <Text style={styles.default_text}>Companie(s) : {filmDetail.production_companies.map(function (company: ProductionCompanie) {
                return company.name;
            }).join(" / ")}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image: {
        height: 169,
        margin: 5
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }, favorite_image: {
        width: 40,
        height: 40
    },
    favorite_container: {
        alignItems: 'center', // Alignement des components enfants sur l'axe secondaire, X ici
    }
})

const mapStateToProps = (state: FilmAppStore) => {
    return {
        favoritesFilm: state.favoritesFilm,
    }
}



export default connect(mapStateToProps)(FilmDetail);