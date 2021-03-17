import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';
import { ToasterService } from '../../service/toaster.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: Observable<string | null> = this.userService.getUser();
  message = 'Something is wrong!';
  
  constructor(private userService: UserService, private toasterService: ToasterService) { }

  ngOnInit(): void {
  }

  setUser(user: string) {
    this.userService.setUser(user);
  }

  setDataFetchTypeFlag(data) {
    this.userService.setDataFetchFlag(data);
  }

  toaster(options) {
    this.toasterService.setOptions(options)
  }
}
