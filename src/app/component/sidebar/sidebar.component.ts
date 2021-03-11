import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: string | null = null;
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe( user => this.user = user);
  }

  checkUser(url) {
    let condition: boolean = false;
    switch (url) {
      case 'alpha':
        condition = this.user == 'user 1' ||  this.user === null ? true : false;
        break;
      case 'beta':
        condition = this.user == 'user 2' ||  this.user === null ? true : false;
        break;
      case 'gamma':
        condition = this.user == 'user 1' || this.user == 'user 2' ||  this.user === null ? true : false;
        break;
      default:
        condition = false;
        break;
    }
    return condition;
  }

}
