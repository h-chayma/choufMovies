import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrl: './list-genres.component.css'
})
export class ListGenresComponent {
  genres: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.movieService.getCategories().subscribe((data) => {
      this.genres = data.genres;
    });
  }

}
