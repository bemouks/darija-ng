import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private carsService: CarsService, private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  carForm: FormGroup;

  initForm(){
    this.carForm = this.formbuilder.group({
      name : ['', Validators.required],
      door :  ['', Validators.required],
      date : ['', Validators.required],
    });
  }

  onSubmitForm(){
    const formValue = this.carForm.value;
    const newCar : Car = {
      name: formValue['name'],
      door: +formValue['door'],
      date: formValue['date']
    };
    this.carsService.createCar(newCar).subscribe((dataResponse)=>{
      const carResponse : Car = {
        id: dataResponse.id,
        name: dataResponse["name"],
        door: dataResponse["door"],
        date: dataResponse["date"]
      };    
      //this.cars = [car, ...this.cars];
      this.carForm.reset();
      this.router.navigate(['/cars']);
    });
  }

}
