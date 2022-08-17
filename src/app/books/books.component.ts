import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.allBooks = this.booksService.getAllBooks();
  }

  allBooks: Book[];

  searchParam: string;
  search(){
    this.allBooks = this.booksService.findBooks(this.searchParam);
  }

  navigate(){
    this.router.navigate(['readParam', {paramHello: "Hello!"}])

  }

}
