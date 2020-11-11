import { Film } from "../../types/film.type"
export type FilmAppStore = { favoritesFilm:  Array<Film>}
const initialState : FilmAppStore = { favoritesFilm: [] };

function toggleFavorite(state = initialState, action :any) {

  switch (action.type) {
    case 'TOGGLE_FAVORITE':
        const favoriteFilmIndex = state.favoritesFilm.findIndex((item) => item.id === action.value.id)
        if (favoriteFilmIndex !== -1) {
            return {
            ...state,
            favoritesFilm: state.favoritesFilm.filter( (_item, index) => index !== favoriteFilmIndex)
            }
        }
        return {
            ...state,
            favoritesFilm: [...state.favoritesFilm, action.value]
        }
  default:
    return state
  }
}

export default toggleFavorite