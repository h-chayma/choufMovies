import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MovieService } from '../services/movie.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewChecked {
  popularMovies: any[] = [];
  categories: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getCategories();
  }

  ngAfterViewChecked(): void {
    this.initializeSlick();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results;
      this.initializeSlick();
    });
  }

  getCategories() {
    this.movieService.getCategories().subscribe((data) => {
      this.categories = data.genres;
    });
  }

  initializeSlick(): void {
    if ($('.card-slider').length) {
      $('.card-slider').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }
}
