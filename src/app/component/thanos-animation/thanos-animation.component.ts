import { element } from 'protractor';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ThanosSnapService } from '@wellwind/ngx-thanos';

@Component({
  selector: 'app-thanos-animation',
  templateUrl: './thanos-animation.component.html',
  styleUrls: ['./thanos-animation.component.css']
})
export class ThanosAnimationComponent implements OnInit, AfterViewInit {

  @ViewChild('thanosElement1') thanosElement: ElementRef;

  snap = false;

  constructor(private thanosSnapService: ThanosSnapService) { }

  ngOnInit(): void {
  }

  snapElement(element) {
    this.thanosSnapService.snap(element)
  }

  rewindElement(element) {
    this.thanosSnapService.rewind(element);
  }

  ngAfterViewInit() {
    // destroy the element, and rewind it after 3s.
    // this.thanosSnapService.snap(this.thanosElement.nativeElement).subscribe(() => {
    //   setTimeout(() => {
    //     this.thanosSnapService.rewind(this.thanosElement.nativeElement);
    //   }, 3000);
    // });
  }

}
