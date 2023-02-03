export interface MoviesModel {
  results: MoviesModel[]
  adult: boolean,
  backdrop_path: string,
  id: number,
  original_language: string,
  media_type: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  name?: string
}
