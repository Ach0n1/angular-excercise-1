import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { WritersComponent } from './writers/writers.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BooksComponent,
    WritersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
