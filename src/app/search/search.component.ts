import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchResults: any[] = [];
  movie: string = '';

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['search']) {
        this.movie = params['search'];
        console.log('Search query detected:', this.movie);
        this.searchMovies();
      }
    });
  }

  searchMovies(): void {
    if (this.movie.trim()) {
      console.log('Performing search for:', this.movie);
      this.movieService.searchMovies(this.movie).subscribe((data) => {
        this.searchResults = data.results;
        console.log('Search results:', data.results);
      });
    }
  }

  getYearFromReleaseDate(releaseDate: string): string {
    return releaseDate.split('-')[0];
  }
}