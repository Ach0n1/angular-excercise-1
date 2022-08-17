import { WriteKeyExpr } from '@angular/compiler';
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
        awards: 2,
        birthday: new Date("1998-02-23")
      },
      {
        firstName: "Mile",
        lastName: "Milic",
        awards: 5,
        birthday: new Date("1992-04-27")
      },
      {
        firstName: "Zika",
        lastName: "Zikic",
        awards: 3,
        birthday: new Date("2001-12-27")
      }
    ]

    return allWriters
  }


  sortWritersByAward(): Writer[]{
    let allWriters = this.getAllWriters();
    return allWriters.sort((writer1, writer2)=>{
      return writer1.awards - writer2.awards
    })
  }

  sortWritersByBirthday(): Writer[]{
    let allWriters=this.getAllWriters();
    return allWriters.sort((writer1, writer2)=>{
      if(writer1.birthday<writer2.birthday){
        return -1;
      }
      else {
        if(writer1.birthday == writer2.birthday){
          return 0;
        }
        else return 1;
      }
    })
  }


}
