import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarComponent } from './components/cars/car/car.component';
import { ListCarComponent } from './components/cars/list-car/list-car.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarComponent,
    ListCarComponent,
    UpdateCarComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
