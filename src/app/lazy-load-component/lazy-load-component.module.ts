import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { PetsContainerComponent } from './pets-container/pets-container.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  { path: '', component: PetsComponent },
];

@NgModule({
  declarations: [PetsComponent, PetsContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    DogComponent,
    CatComponent,
  ],
  exports: [RouterModule]
})
export class LazyLoadComponentModule { }
