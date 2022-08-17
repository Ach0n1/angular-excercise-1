import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-param',
  templateUrl: './read-param.component.html',
  styleUrls: ['./read-param.component.css']
})
export class ReadParamComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.readParam = this.route.snapshot.paramMap.get('paramHello');
  }

  readParam: string;

}
