import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Observable<string | null> = this.userService.getUser();
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  setUser(user: string) {
    console.log('hello');
    this.userService.setUser(user);
  }
}
