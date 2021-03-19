import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-vs-datalist',
  templateUrl: './select-vs-datalist.component.html',
  styleUrls: ['./select-vs-datalist.component.css']
})

export class SelectVsDatalistComponent implements OnInit {

  animal: string = '';
  game: string = '';

  constructor() { }

  ngOnInit(): void { }

}
