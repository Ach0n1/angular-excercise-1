import { Component, OnInit } from '@angular/core';
import { Writer } from '../models/writer';
import { WritersService } from '../services/writers.service';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent implements OnInit {

  constructor(private writerService: WritersService) { }

  ngOnInit(): void {
    this.allWriters = this.writerService.getAllWriters();
  }

  allWriters: Writer[]

  sortByAwards(){
    this.allWriters = this.writerService.sortWritersByAward();
  }

  sortByBirthday(){
    this.allWriters = this.writerService.sortWritersByBirthday();
  }

}
