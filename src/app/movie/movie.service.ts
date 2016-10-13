import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class MovieService {
  
  private baseApiUrl = "https://api.themoviedb.org/3/movie/"
  private movieId ="550";
  private apiKey = "98461c65a3ed04ad8990a30ac070b07c"; 

  constructor(private http: Http) { }

  getMovieData() {
    return this.http.get(this.baseApiUrl + this.movieId + "?api_key=" + this.apiKey)
      .map(response => response.json());
  }

  getCreditsData() {
    return this.http.get(this.baseApiUrl + this.movieId + "/credits" + "?api_key=" + this.apiKey)
      .map(response => response.json());
  }

}
