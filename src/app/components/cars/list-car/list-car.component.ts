import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export class ListCarComponent implements OnInit {

  cars : Car[] = [];

  searchText : string;  

  constructor(private carsService: CarsService, private router : Router) { }

  ngOnInit(): void {
    
    this.getAllCars();
  }

  getAllCars(){
    this.carsService.getAllCars().subscribe( 
      cars => {
        this.cars = cars;
        //console.log(cars["hydra:member"][0].name);
      }  
      );
  }

  onDeleteCar(id: number){
    this.carsService.delete(id).subscribe(
      ()=>{ this.cars = this.cars.filter(cars => cars.id != id) }
      );
  }

  onEditCar(car){
    //this.router.navigate(['/car/edit', car.id], { state: {car: car} });
    this.router.navigate(['/car/edit', car.id]);
  }


  searchCars(){
    this.carsService.getAllCars(this.searchText).subscribe( 
      cars => {
        this.cars = cars;
        //console.log(cars["hydra:member"][0].name);
        }  
      );
  }
  

  

}
