import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'practiceProject';
  user: string | null = null;

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe( user => this.user = user);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }
}
