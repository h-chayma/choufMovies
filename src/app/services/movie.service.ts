import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '3f2b26e56f2c2ffc6fbf8d9136cadc9e';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  // Fetch popular movies
  getPopularMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  // Search for movies by title
  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/movie?query=${query}&api_key=${this.apiKey}`);
  }

  // Fetch movie details by ID
  getMovieDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=credits,videos`);
  }

  // Fetch categories
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`);
  }

  // Fetch movie by Category ID
  getMoviesByCategory(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${id}`);
  }
}