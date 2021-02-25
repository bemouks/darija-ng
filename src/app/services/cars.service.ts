import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getAllCars(filterName=""): Observable<any>{
    const filterUrl = filterName ? `?name=${filterName}` : "";
    return this.http.get(environment.api_url + `/api/cars${filterUrl}`).pipe(
      tap(
          //response => {console.log(response)}
      )
    );
  }

  getCar(id:number) : Observable<any>{    
    return this.http.get(environment.api_url + `/api/cars/`+id);
  }

  delete(id: number){
    return this.http.delete(environment.api_url + `/api/cars/`+id);
    return this.http.delete(`${environment.api_url}/api/cars/${id}`);
  }

  createCar(car: Car) : Observable<any>{
    return this.http.post(environment.api_url + `/api/cars`, car);
  }

  updateCar(car: Car): Observable<any>{
    return this.http.put(environment.api_url + `/api/cars/${car.id}`, car);
  }

}
