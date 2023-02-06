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
  getActionsMovies: MoviesModel[] = []
  getAdvantureMovies: MoviesModel[] = []
  getComedyMovies: MoviesModel[] = []
  getThrilerMovies: MoviesModel[] = []
  getDocumentaryMovies: MoviesModel[] = []
  getScienceMovies: MoviesModel[] = []
  getAnimationMovies: MoviesModel[] = []
  activateIndex = 0

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getBanner()
    this.getTrendingMovies()
    this.actionMovies()
    this.comedyMovies()
    this.scienceMovies()
    this.documenatryMovies()
    this.thrillerMovies()
    this.AdvantureMovies()
    this.animationMovies()
  }

  getBanner() {
    this.movieService.moviesForBanner().subscribe((data) => {
      this.bannerData = data.results
      console.log(this.bannerData, '#banners')
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

  //action

  actionMovies() {
    this.movieService.fetchActionMovies().pipe(
      tap((actionResult) => {
        this.getActionsMovies = actionResult.results
      })
    ).subscribe()
  }

  //advanture

  AdvantureMovies() {
    this.movieService.fetchAdvantureMovies().pipe(
      tap((discoverResult) => {
        this.getAdvantureMovies = discoverResult.results
      })
    ).subscribe()
  }

  //comedy

  comedyMovies() {
    this.movieService.fetchComedyMovies().pipe(
      tap((comedyResult) => {
        this.getComedyMovies = comedyResult.results
      })
    ).subscribe()
  }

  //thriller

  thrillerMovies() {
    this.movieService.fetchThrilerMovies().pipe(
      tap((thrilerResult) => {
        this.getThrilerMovies = thrilerResult.results
      })
    ).subscribe()
  }


  //documentary

  documenatryMovies() {
    this.movieService.fetchDocumentaryMovies().pipe(
      tap((documentaryResult) => {
        this.getDocumentaryMovies = documentaryResult.results
      })
    ).subscribe()
  }

  //science

  scienceMovies() {
    this.movieService.fetchScieneMovies().pipe(
      tap((scienceResult) => {
        this.getScienceMovies = scienceResult.results
      })
    ).subscribe()
  }

  //animation

  animationMovies() {
    this.movieService.fetchAnimationMovies().pipe(
      tap((animationResult) => {
        this.getAnimationMovies = animationResult.results
      })
    ).subscribe()
  }
}
