import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { ReadParamComponent } from './read-param/read-param.component';
import { WritersComponent } from './writers/writers.component';

const routes: Routes = [
  {path:"about", component: AboutComponent},
  {path:"books", component: BooksComponent},
  {path:"writers", component: WritersComponent},
  {path:"readParam", component: ReadParamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
