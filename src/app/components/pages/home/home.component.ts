import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../core/services/movie.service';
import { tap } from 'rxjs';
import { MoviesModel } from '../../../core/models/movies-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  bannerData: MoviesModel[] = []
  trendingMoviesData: MoviesModel[] = []
  activateIndex = 0

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getBanner()
    this.getTrendingMovies()
  }

  getBanner() {
    this.movieService.moviesForBanner().subscribe((data) => {
      this.bannerData = data.results
      // console.log(this.bannerData)
    })
  }
  previousSlide() {
    this.activateIndex = this.activateIndex === 0 ? this.bannerData.length - 1 : this.activateIndex - 1
  }

  nextSlide() {
    this.activateIndex = this.activateIndex === this.bannerData.length - 1 ? 0 : this.activateIndex + 1
  }

  getTrendingMovies() {
    this.movieService.trendingMovies().pipe(
     tap((data) => {
       this.trendingMoviesData = data.results
     })
    ).subscribe()
  }
}
