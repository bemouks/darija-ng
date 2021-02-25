import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  carForm: FormGroup;

  car : Car ;

  constructor(private formbuilder : FormBuilder, private carsService : CarsService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    //this.car = history.state.car;
    this.initForm();
    const id = this.route.snapshot.params['idCar'];
    this.carsService.getCar(Number(id)).subscribe((dataResponse)=>{
      this.car = {
        id: dataResponse.id,
        name: dataResponse["name"],
        door: dataResponse["door"],
        date: dataResponse["date"]
      };  
      this.carForm.controls['name'].setValue(this.car.name);
      this.carForm.controls['door'].setValue(this.car.door);
    });
    
  }

  initForm(){
    this.carForm = this.formbuilder.group({
      name : ['', Validators.required],
      door :  ['', Validators.required],
    });
  }

  onSubmitForm(){
    const formValue = this.carForm.value;
    const newCar : Car = {
      id:  this.car.id,
      name: formValue['name'],
      door: +formValue['door']
    };
    this.carsService.updateCar(newCar).subscribe(()=>{
      this.router.navigate(['/cars']);
    });
  }

}
