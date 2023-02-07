// @ts-ignore

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesModel } from '../models/movies-model';
import { SearchmovieModel } from '../models/searchmovie-model';
import { CastModel } from '../models/cast.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3'
  apiKey = '8b65ecf9f7f08534b78f87303bde7508'

  constructor(private http: HttpClient) { }

  //Get Movies Banners

  moviesForBanner(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
  }

  //Get Trending Movies

  trendingMovies(): Observable<MoviesModel> {
   return  this.http.get<MoviesModel>(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`)
  }

  //Get search movies but not working invalid api key return 401 error

  getSearchMovie(title: any): Observable<MoviesModel>{
    return this.http.get<MoviesModel>(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${title.movieName}`)
  }

  // get Single Movie

  getMovieDetails(data: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`)
  }

  //get movie video

  getMovieVideo(data: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  //get movieCast

  getMovieCast(data: any): Observable<CastModel>{
    return this.http.get<CastModel>(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`)
  }

  //get actionMovies

  fetchActionMovies(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`)
  }

  //get advanture

  fetchAdvantureMovies(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`)
  }

  //get animations

  fetchAnimationMovies(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`)
  }

  //get comedy

  fetchComedyMovies(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`)
  }

  //get documentary

  fetchDocumentaryMovies(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`)
  }

  //get science-fiction

  fetchScieneMovies(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`)
  }

  //get thriller

  fetchThrilerMovies(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`)
  }
}
