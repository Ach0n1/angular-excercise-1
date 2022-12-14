import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { WritersComponent } from './writers/writers.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { FormsModule } from '@angular/forms';
import { ReadParamComponent } from './read-param/read-param.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BooksComponent,
    WritersComponent,
    BookdetailsComponent,
    ReadParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
