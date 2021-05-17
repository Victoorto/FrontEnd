import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/common/car';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'http://localhost:8080/api/cars/';

  constructor(private http: HttpClient) { }


  public getCarList(theCarType: String): Observable<Car[]> {

//Need to build URL based on car type
const searchUrl = `${this.baseUrl}search/findByCarType?si=${theCarType}`;

    return this.http.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.cars)
    );
  }
}

interface GetResponse{
  _embedded: {
    cars: Car[];
  }
}