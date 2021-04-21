import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZetaComponent } from './zeta.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ZetaComponent},
];

@NgModule({
  declarations: [ZetaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ZetaModule { }
