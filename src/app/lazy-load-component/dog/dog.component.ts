import { Component, Input, OnInit } from '@angular/core';
import Dog from 'src/app/models/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  @Input() dog: Dog;

  constructor() { 
    console.log('Dog component loaded');
  }

  ngOnInit(): void {
  }

}
