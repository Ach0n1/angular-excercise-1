import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAllBooks(): Book[]{
    return[
      {
        name: "Knjia 1 - Tom I",
        writer: "Pera",
        pages: 500
      },
      {
        name: "Knjia 1 - Tom II",
        writer: "Pera",
        pages: 300
      },
      {
        name: "Knjia 2",
        writer: "Zika",
        pages: 400
      },
    ]
  }

  findBooks(searchParam: string): Book[]{
    let allBooks = this.getAllBooks();
    //find metoda vraca prvi objekat koji zadovoljava uslov, dok filter vraca sve objekte koji zadovoljavaju uslov
    return allBooks.filter(book => book.name.toLowerCase().includes(searchParam.toLowerCase()) || book.writer.toLowerCase().includes(searchParam.toLocaleLowerCase()));
  }


}
