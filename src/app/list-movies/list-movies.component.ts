import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  movies: any[] = [];
  genreName: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.getGenreNameById(+id);
        this.getMoviesByGenre(+id);
      } else {
        this.getPopularMovies();
      }
    });
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }

  getMoviesByGenre(id: number) {
    this.movieService.getMoviesByCategory(id).subscribe((data) => {
      this.movies = data.results;
    });
  }

  getGenreNameById(id: number) {
    this.movieService.getCategories().subscribe((data) => {
      const genre = data.genres.find((g: any) => g.id === id);
      this.genreName = genre ? genre.name : '';
    });
  }

  getYearFromReleaseDate(releaseDate: string): string {
    return releaseDate.split('-')[0];
  }
}
