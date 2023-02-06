import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MoviesModel } from '../../../core/models/movies-model';
import { CastModel } from '../../../core/models/cast.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{
  getMovieDetails: any
  getMoviesVideo: any
  getMoviesCast: CastModel[] = []

  constructor(private movieService: MovieService, private router: ActivatedRoute) {
  }
  ngOnInit() {
    let getActiveId = this.router.snapshot.paramMap.get('id')

    this.movieDetails(getActiveId)
    this.moviesVideo(getActiveId)
    this.movieCast(getActiveId)
  }

  movieDetails(id: any) {
    this.movieService.getMovieDetails(id).subscribe((result) => {
      this.getMovieDetails = result
      // console.log(result)
    })
  }

  moviesVideo(id: any) {
    this.movieService.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if(element.type == 'Trailer') {
          this.getMoviesVideo = element.key
        }
      })
    })
  }

  movieCast(id: any) {
    this.movieService.getMovieCast(id).subscribe((result) => {
      console.log(result, 'movieCast#')
      this.getMoviesCast = result.cast
    })
  }
}
