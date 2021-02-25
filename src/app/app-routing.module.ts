import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarComponent } from './components/cars/list-car/list-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';

const routes: Routes = [
  {path:'', redirectTo:'/cars', pathMatch:'full'},
  {path:'cars', component: ListCarComponent},
  {path:'car/update', component: UpdateCarComponent},
  {path:'car/edit/:idCar', component: EditCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
