import { LoaderService } from './../../service/loader.service';
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
  times: any = [];
  dataFetchType: boolean = false;

  constructor(
    private userService: UserService, 
    private _routes: ActivatedRoute,
    private todoAfterService: TodoAfterService,
    private loaderService: LoaderService,
  ) {
    console.log('Beta Component is loaded');
  }

  ngOnInit(): void {
    this.times.push({title: 'Component Rendered', time: (new Date()).getTime()})

    // Fetch data fetch type flag from service
    this.userService.getDataFetchType().subscribe( dataFetchType => {
      console.log('data Fetch Type', dataFetchType);
      this.dataFetchType = dataFetchType;
    });

    this.dataFetchType ? this.fetchTodoBeforeRender() : this.fetchTodoAfterRender();
  }

  // Fetching data from service after component render's
  fetchTodoAfterRender(): void {
    this.times.push({title: 'After Render, Before Call', time: (new Date()).getTime()})

    this.loaderService.setLoader(true);
    this.todoAfterService.getTodosAfter().subscribe( todos => {
      this.loaderService.setLoader(false);
      this.times.push({title: 'After Render, After Call', time: (new Date()).getTime()})
      if(!this.dataFetchType) {
        this.todos = [];
        this.todos = todos ;
      }
    })
  }

  // Prefetching data from router before component render's
  fetchTodoBeforeRender(): void {
    this.times.push({title: 'Before Render, Before Call', time: (new Date()).getTime()})

    this.loaderService.setLoader(true);
    this._routes.data.subscribe( (todos: any) => {
      this.loaderService.setLoader(false);
      this.times.push({title: 'Before Render, After Call', time: (new Date()).getTime()})
      this.todos = [];
      this.todos = todos.TodoBeforeService;
    })
  }

  ngOnDestroy() {
    this.todos = [];
  }

}
