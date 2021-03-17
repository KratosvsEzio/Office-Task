import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../service/toaster.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
  show = false;
  hideToaster: any;
  options: { message: string, type: string, time: number } = {message: '', type: '', time: 3000};

  constructor(private toaster: ToasterService) { }

  ngOnInit(): void {
    this.toaster.getOptions().pipe(
      take(1)
    ).subscribe( (options) => {
      console.log('toaster options', options[0]);
      this.options = options[0];
      this.animationTiming();
    });
  }

  animationTiming(): void {
    setTimeout(() => {
      this.show = true;
    }, 100);

    const hideToasterTime = this.options.time + 150;
    console.log('hide', hideToasterTime)

    setTimeout(() => {
      this.show = false;
      console.log('hide', hideToasterTime, this.show)
    }, 3150);
  }
}
