import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AlphaComponent } from './component/alpha/alpha.component';
import { BetaComponent } from './component/beta/beta.component';
import { GammaComponent } from './component/gamma/gamma.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: 'alpha', component: AlphaComponent, canActivate: [AuthGuard] },
  { path: 'beta', component: BetaComponent, canActivate: [AuthGuard]},
  { path: 'gamma', component: GammaComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent,},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponent = [
  SidebarComponent, 
  AlphaComponent,
  BetaComponent, 
  GammaComponent, 
  HomeComponent 
]


