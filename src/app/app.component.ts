import { LoaderService } from './service/loader.service';
import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';
import { ToasterService } from './service/toaster.service';
import { Observable } from 'rxjs';

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
  loader: Observable<boolean>;

  constructor(public toasterService: ToasterService, private loaderService: LoaderService) {
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

    this.loader = this.loaderService.getLoader();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
