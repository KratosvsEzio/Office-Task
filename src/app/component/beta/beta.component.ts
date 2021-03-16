import { TodoBeforeService } from './../../service/todo-before.service';
import { TodoAfterService } from './../../service/todo-after.service';
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

  constructor(
    private userService: UserService, 
    private _routes: ActivatedRoute,
    private todoAfterService: TodoAfterService,
  ) {
    console.log('Beta Component is loaded');
  }

  ngOnInit(): void {
    console.log('Beta Component is rendered', (new Date()).getTime());

    // Fetch data fetch type flag from service
    this.userService.getDataFetchType().subscribe( dataFetchType => {
      console.log('data Fetch Type', dataFetchType);
      this.dataFetchType = dataFetchType;
    });

    this.dataFetchType ? this.fetchTodoBeforeRender() : this.fetchTodoAfterRender();
  }

  // Fetching data from service after component render's
  fetchTodoAfterRender(): void {
    console.log('Todos is loaded After, before call', (new Date()).getTime());

    this.todoAfterService.getTodosAfter().subscribe( todos => {
      console.log('Todos is loaded After, after call', (new Date()).getTime());
      if(!this.dataFetchType) {
        this.todos = [];
        this.todos = todos ;
      }
    })
  }

  // Prefetching data from router before component render's
  fetchTodoBeforeRender(): void {
    console.log('Todos is loaded Before, before call', (new Date()).getTime());

    this._routes.data.subscribe( (todos: any) => {
      console.log('Todos is loaded Before, after call', (new Date()).getTime());
      this.todos = [];
      this.todos = todos.TodoBeforeService;
    })
  }

  ngOnDestroy() {
    this.todos = [];
  }

}
