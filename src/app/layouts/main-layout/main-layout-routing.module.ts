import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
  component: MainLayoutComponent,
  children: [
     { path: '', redirectTo: 'car-model', pathMatch: 'full' },
     {
      path:'car-model',
      loadChildren: ()=>
        import('../../modules/car-models/car-models.module').then( 
          (m)=> m.CarModelsModule
        )
      }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
