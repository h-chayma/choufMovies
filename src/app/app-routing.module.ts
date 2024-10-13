import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './search/search.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { ListGenresComponent } from './list-genres/list-genres.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: ListMoviesComponent },
  { path: 'genres', component: ListGenresComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'genre/:id', component: ListMoviesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
