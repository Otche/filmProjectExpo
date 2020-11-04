export type Film = {
    id: number;
    vote_average: number;
    title: string;
    poster_path: string;
    original_title: string;
    overview: string;
    release_date: string;
    imageUrl: string;
}
export type ProductionCompanie = {
    id : number;
    logo_path : string;
    name : string;
    origin_country : string;
}

export type Genre = {
    id : number;
    name : string;
}

export type ProductionCountrie = {
    iso_3166_1 : string;
    name : string;
}

export type SpokenLanguages  = {
    iso_3166_1 : string;
    name : string;
}

export type FilmDetailType = {
    adult: boolean, 
    backdrop_path: string, 
    belongs_to_collection: any, 
    budget: number, 
    genres: Array<Genre>, 
    homepage: string, 
    id: number, 
    imdb_id: string, 
    original_language: string, 
    original_title: string, 
    overview: string, 
    popularity: number, 
    poster_path: string, 
    production_companies:  Array<ProductionCompanie>, 
    production_countries: Array<ProductionCountrie>, 
    release_date: string, 
    revenue: number, 
    runtime: number, 
    spoken_languages: Array<SpokenLanguages>, 
    status: string, 
    tagline: string, 
    title: string, 
    video: boolean, 
    vote_average: number, 
    vote_count: number,
    imageUrl : any
}