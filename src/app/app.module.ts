import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { ListGenresComponent } from './list-genres/list-genres.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { LimitCastPipe } from './pipes/limit-cast.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ListMoviesComponent,
    ListGenresComponent,
    AboutComponent,
    NotFoundComponent,
    SafeUrlPipe,
    LimitCastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
