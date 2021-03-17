import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';
import { ToasterService } from './service/toaster.service';

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

  constructor(public toasterService: ToasterService) {
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
