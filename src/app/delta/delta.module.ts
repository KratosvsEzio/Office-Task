import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeltaComponent } from './delta.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DeltaComponent},
];

@NgModule({
  declarations: [DeltaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DeltaModule { }
