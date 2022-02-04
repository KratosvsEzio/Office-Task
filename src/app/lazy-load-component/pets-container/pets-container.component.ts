import { Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';
import Cat from 'src/app/models/Cat';
import Dog from 'src/app/models/Dog';
import Pet from 'src/app/models/pet';
import { CatComponent } from '../cat/cat.component';
import { DogComponent } from '../dog/dog.component';

@Component({
  selector: 'app-pets-container',
  templateUrl: './pets-container.component.html',
  styleUrls: ['./pets-container.component.css']
})
export class PetsContainerComponent implements OnInit {

  @Input() pet: Pet;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.viewContainerRef.clear();
    const cat = this.pet as Cat;
    const dog = this.pet as Dog;

    if (cat.favoriteComfyPlace) {

      const catComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CatComponent);
      const componentRef = this.viewContainerRef.createComponent(catComponentFactory);
      componentRef.instance.cat = cat;
    } else if (dog.favoritePark) {

      const dogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DogComponent);
      const componentRef = this.viewContainerRef.createComponent(dogComponentFactory);
      componentRef.instance.dog = dog;
    }
  }

}
