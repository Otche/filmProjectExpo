const API_TOKEN = "73ce7fca8e095c40aeb404546394b91a";

export function getFilmsFromApiWithSearchedText (text : string,page : number) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + 
  API_TOKEN + '&language=fr&query=' + text
   + "&page=" + page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi (name : string) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi (id: number) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}