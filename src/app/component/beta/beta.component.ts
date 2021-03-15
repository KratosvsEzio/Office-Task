import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit, OnDestroy {

  todos: any = [];
  dataFetchType: boolean = false;

  constructor(private userService: UserService, private _routes: ActivatedRoute) {
    console.log('Beta Component is loaded');
  }

  ngOnInit(): void {
    console.log('Beta Component is rendered');

    // Fetch data fetch type flag from service
    this.userService.getDataFetchType().subscribe( dataFetchType => {
      console.log('data Fetch Type', dataFetchType);
      this.dataFetchType = dataFetchType;
    })

    // Fetching data from service 
    this.userService.getTodosAfter().subscribe( todos => {
      if(!this.dataFetchType) {
        console.log('Todos is loaded After', todos);
        this.todos = [];
        this.todos = todos ;
      }
    })

    // Fetching data from router
    this._routes.data.subscribe( (todos: any) => {
      if(this.dataFetchType) {
        console.log('Todos is loaded Before', todos.UserDataBeforeRenderService);
        this.todos = [];
        this.todos = todos.UserDataBeforeRenderService;
      }
    })

  }

  ngOnDestroy() {
    this.todos = [];
  }

}
