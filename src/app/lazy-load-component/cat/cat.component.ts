import { Component, Input, OnInit } from '@angular/core';
import Cat from 'src/app/models/cat';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @Input() cat: Cat;

  constructor() {
    console.log('Cat component loaded');
  }

  ngOnInit(): void {
  }

}
