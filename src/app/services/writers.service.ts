import { Injectable } from '@angular/core';
import { Writer } from '../models/writer';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor() { }

  getAllWriters(): Writer[]{
    let allWriters: Writer[] = [
      {
        firstName: "Pera",
        lastName: "Peric",
        awards: 5
      },
      {
        firstName: "Mile",
        lastName: "Milic",
        awards: 5
      }
    ]

    return allWriters
  }
}
