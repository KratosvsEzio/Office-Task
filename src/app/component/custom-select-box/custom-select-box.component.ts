import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-custom-select-box',
  templateUrl: './custom-select-box.component.html',
  styleUrls: ['./custom-select-box.component.css']
})
export class CustomSelectBoxComponent implements OnInit {

  constructor() { }

  @ViewChild('customSelect') customSelect: ElementRef<any>;
  @ViewChild('dropDownIcon') dropDownIcon: ElementRef<any>;
  animal: string = '';
  animals = [
    'Dog', 'Cat', 'Horse', 'Dragon', 'Snake', 'Crane', 'Panda', 'Turtle', 'Tiger', 'Monkey', 'Bull'
  ]

  ngOnInit(): void {
    window.addEventListener('click', (e) => {
      if(e. target !== this.customSelect.nativeElement && e.target !== this.dropDownIcon.nativeElement) {
        this.customSelect.nativeElement.nextSibling.style.visibility = 'hidden';
      }
    })
  }

  selectListItemsShow() {
    this.customSelect.nativeElement.nextSibling.style.visibility = 'visible';
    this.customSelect.nativeElement.nextSibling.firstChild.focus();
    this.navigateListItems();
  }

  hideListItems() {
    this.customSelect.nativeElement.nextSibling.style.visibility = 'hidden';
  }

  navigateListItems() {
    let selectedlistItem = this.customSelect.nativeElement.nextSibling.firstChild;

    this.customSelect.nativeElement.nextSibling.addEventListener("keydown", (e) => {
      e.preventDefault();
      if(e.keyCode === 38 && selectedlistItem !== this.customSelect.nativeElement.nextSibling.firstChild) {
        selectedlistItem = selectedlistItem.previousSibling;
      } else if(e.keyCode === 40 && selectedlistItem !== this.customSelect.nativeElement.nextSibling.lastChild) {
        selectedlistItem = selectedlistItem.nextSibling;
      } else if(e.keyCode === 13) {
        this.setSelectedValue(selectedlistItem.textContent);
      } else if(e.keyCode === 27) {
        this.customSelect.nativeElement.nextSibling.style.visibility = 'hidden';
      }
      selectedlistItem.focus();
    });
  }

  setSelectedValue(value: any) {
    this.animal = typeof value === 'string' ? value : value.target.textContent;
    this.customSelect.nativeElement.nextSibling.style.visibility = 'hidden';
  }

}
