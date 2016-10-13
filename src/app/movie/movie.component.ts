import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

  movie = {};
  cast = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovieData().subscribe(data => this.movie = data);
    this.movieService.getCreditsData().subscribe(data => this.cast = data.cast);
  }

}
