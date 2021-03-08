import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceProject';
  user: string | null = null;
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe( user => this.user = user);
  }
}
