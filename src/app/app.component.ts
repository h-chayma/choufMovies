import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'choufMovie';
  searchedMovie: string = '';

  onMovieSearched(movie: string): void {
    this.searchedMovie = movie;
  }

  ngAfterViewChecked(): void {
    this.backToTop();
  }

  private backToTop(): void {
    const btn = document.getElementById('backto-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn?.classList.add('show');
      } else {
        btn?.classList.remove('show');
      }
    });

    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
