import { AfterViewChecked, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewChecked {
  movie: string = '';

  @Output() movieSearched: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  onSubmit(): void {
    if (this.movie.trim()) {
      console.log('Search term:', this.movie);
      this.router.navigate(['/search'], { queryParams: { search: this.movie } });
    }
  }

  ngAfterViewChecked(): void {
    this.hamburgerMenu();
  }

  private hamburgerMenu(): void {
    if ($('.hamburger-menu').length) {
      $('.hamburger-menu').off('click').on('click', () => {
        $('.bar').toggleClass('animate');
        $('.mobile-navar').toggleClass('active');
      });

      $('.has-children').off('click').on('click', () => {
        $(this).children('ul').slideToggle('slow', 'swing');
        $(this).find('.icon-arrow').toggleClass('open');
      });
    }
  }
}
