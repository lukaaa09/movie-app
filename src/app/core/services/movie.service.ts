import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesModel } from '../models/movies-model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3'
  apiKey = '8b65ecf9f7f08534b78f87303bde7508'

  constructor(private http: HttpClient) { }

  moviesForBanner(): Observable<MoviesModel> {
    return this.http.get<MoviesModel>(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
  }

  trendingMovies(): Observable<MoviesModel> {
   return  this.http.get<MoviesModel>(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`)
  }
}
