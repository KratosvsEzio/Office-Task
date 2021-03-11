import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private userService: UserService) { }
  user: string| null = null;
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):
  boolean | Observable<boolean> | Promise<boolean> {
    
    const url = state.url;
    let condition: boolean = false;
    this.userService.getUser().subscribe( user => this.user = user);

    console.log('Current url', url);
    switch (url) {
      case '/alpha':{
        condition = this.user == 'user 1' ? true : false;
        break;
      }
      case '/beta':{
        condition = this.user == 'user 2' ? true : false;
        break;
      }
      case '/gamma':{
        condition = this.user == 'user 1' || this.user == 'user 2' || this.user == null ? true : false;
        break;
      }
      default:
        condition = false;
        break;
    }
    return condition;
  }
  
}
