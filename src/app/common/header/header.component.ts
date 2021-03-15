import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string | null = null;
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getUser().subscribe( user => {
      this.user = user;
    })
  }

  setUser(user: string = null) {
    this.userService.setUser(user);
  }

}
