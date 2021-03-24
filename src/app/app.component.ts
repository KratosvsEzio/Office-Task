import { LoaderService } from './service/loader.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';
import { ToasterService } from './service/toaster.service';
import { nextTick } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'practiceProject';
  toaster = [];
  toasterLength = 0;
  loader: boolean;

  constructor(public toasterService: ToasterService, private loaderService: LoaderService) {
    this.createToasters();
    this.setLoader();
  }

  // Create Toasters
  createToasters() {
    this.toasterService.getOptions().subscribe(res => {
      this.toaster = res;
      if(this.toaster.length !== 0 && this.toaster.length < this.toasterLength) {
        setTimeout(() => {
          this.toaster.pop();
          this.toasterService.setOptions(this.toaster);
        }, 4000);
      }
      this.toasterLength = this.toaster.length;
    }); 
  }

  // Set Loader Flag 'true'/'false'
  setLoader() {
    this.loaderService.getLoader().subscribe( loader => {
      // next tick will help us tackle the error of value changed after view has been updated 
      nextTick(() => {
        this.loader = loader
      });
    });
  }

  // Route animation
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
