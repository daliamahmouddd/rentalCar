import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarModelsRoutingModule } from './car-models-routing.module';
import { CarCardComponent } from './components/car-card/car-card.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarDetailsComponent } from './components/car-details/car-details.component';

@NgModule({
  declarations: [
    CarCardComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    CarModelsRoutingModule,
    CarouselModule
  ]
})
export class CarModelsModule { }
