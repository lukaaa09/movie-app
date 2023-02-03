import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../../../core/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }

  searchForm = new FormGroup({
  movieName: new FormControl('')
  });
  submitForm() {
    console.log(this.searchForm.value)
    this.movieService.getSearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result)
    })
  }
}
