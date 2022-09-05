import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  {path:'', redirectTo:'car-details' , pathMatch:'full'},
  {path:'car-details' , component:CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarModelsRoutingModule { }
