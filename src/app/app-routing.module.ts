import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AlphaComponent } from './component/alpha/alpha.component';
import { BetaComponent } from './component/beta/beta.component';
import { GammaComponent } from './component/gamma/gamma.component';
import { HomeComponent } from './component/home/home.component';
import { UserDataBeforeRenderService } from './service/user-data-before-render.service'


const routes: Routes = [
  { path: 'alpha', component: AlphaComponent, canActivate: [AuthGuard], data: { animationState: 'alpha' }},
  { path: 'beta', component: BetaComponent, canActivate: [AuthGuard], data: { animationState: 'beta' },
    resolve: {UserDataBeforeRenderService}
  },
  { path: 'gamma', component: GammaComponent, canActivate: [AuthGuard], data: { animationState: 'gamma' }},
  { path: 'home', component: HomeComponent, data: { animationState: 'home' }},
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


