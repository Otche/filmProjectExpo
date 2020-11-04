import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Genre, ProductionCompanie } from '../types/film.type'

export const FilmDetail = ({ route }: { route: any }) => {
    const { filmDetail } = route.params;
    return (
        <ScrollView style={styles.scrollview_container}>
            {/*<Image
          style={styles.image}
          source={{uri: imageUrl}}
        />*/}
            <Text style={styles.title_text}>{filmDetail.title}</Text>
            <Text style={styles.description_text}>{filmDetail.overview}</Text>
            {/*<Text style={styles.default_text}>Sorti le {moment(new Date(filmDetail.release_date)).format('DD/MM/YYYY')}</Text>*/}
            <Text style={styles.default_text}>Note : {filmDetail.vote_average} / 10</Text>
            <Text style={styles.default_text}>Nombre de votes : {filmDetail.vote_count}</Text>
            {/* <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>*/}
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
    }
})

export default FilmDetail