import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  movie: any;
  videoKey: string | undefined;
  visibleCastCount: number = 8;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? 0;
    this.getMovieDetails(+id);
  }

  getMovieDetails(id: number) {
    this.movieService.getMovieDetails(id).subscribe((data: any) => {
      this.movie = data;
      const trailer = data.videos.results.find((video: any) => video.type === 'Trailer');
      this.videoKey = trailer ? trailer.key : undefined;
    }, error => {
      console.error('Error fetching movie details:', error);
    });
  }

  getCast() {
    return this.movie?.credits?.cast || [];
  }

  showMoreCast() {
    if (this.visibleCastCount === 8) {
      this.visibleCastCount = this.getCast().length;
    } else {
      this.visibleCastCount = 8;
    }
  }

  getYearFromReleaseDate(releaseDate: string): string {
    return releaseDate.split('-')[0];
  }

  convertRuntime(runtime: number): string {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  }

  getDirectors() {
    return this.movie?.credits.crew.filter((crewMember: any) => crewMember.job === 'Director');
  }

}
