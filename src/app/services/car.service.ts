import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/common/car';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = "http://localhost:8080/api/cars";

  constructor(private httpClient: HttpClient) { }


  getCars(): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}`);
  }
/*
  public getCarList(): Observable<Car[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.Cars)
    );
  }
}
/*
interface GetResponse{
  _embedded: {
    Cars: Car[];
  }*/
}
