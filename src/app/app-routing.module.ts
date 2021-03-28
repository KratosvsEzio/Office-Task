import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth.guard';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AlphaComponent } from './component/alpha/alpha.component';
import { BetaComponent } from './component/beta/beta.component';
import { GammaComponent } from './component/gamma/gamma.component';
import { HomeComponent } from './component/home/home.component';
import { TodoBeforeService } from './service/todo-before.service';
import { SelectVsDatalistComponent } from './component/select-vs-datalist/select-vs-datalist.component';
import { DisplayNewHtmlComponent } from './component/display-new-html/display-new-html.component';
import { DropShadowComponent } from './component/drop-shadow/drop-shadow.component';
import { ThanosAnimationComponent } from './component/thanos-animation/thanos-animation.component';


const routes: Routes = [
  { path: 'alpha', component: AlphaComponent, canActivate: [AuthGuard], data: { animationState: 'alpha' }},
  { path: 'beta', component: BetaComponent, canActivate: [AuthGuard], data: { animationState: 'beta' }, resolve: {TodoBeforeService} },
  { path: 'gamma', component: GammaComponent, canActivate: [AuthGuard], data: { animationState: 'gamma' }},
  { path: 'home', component: HomeComponent, data: { animationState: 'home' }},
  { path: 'datalist', component: SelectVsDatalistComponent, data: { animationState: 'datalist' }},
  { path: 'newHtml', component: DisplayNewHtmlComponent, data: { animationState: 'newHtml' }},
  { path: 'dropshadow', component: DropShadowComponent, data: { animationState: 'dropShadow' }},
  { path: 'thanos-animation', component: ThanosAnimationComponent, data: { animationState: 'thanosAnimation' }},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
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
  HomeComponent,
  SelectVsDatalistComponent,
  DisplayNewHtmlComponent,
  DropShadowComponent,
  ThanosAnimationComponent,
]


