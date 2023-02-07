import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../../../core/services/movie.service';
import { MoviesModel } from '../../../core/models/movies-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  searchedMovies:MoviesModel[] = []
  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  searchForm = new FormGroup({
  movieName: new FormControl('')
  });
  submitForm() {
    this.movieService.getSearchMovie(this.searchForm.value).subscribe((result) => {
      this.searchedMovies = result.results
    })
  }
}
