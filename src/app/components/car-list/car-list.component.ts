import { Component, OnInit } from '@angular/core';
import {  CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/common/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  Cars?: Car[];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.listCars();
  }

  listCars(){
    this.carService.getCars().subscribe(
      data =>{
        this.Cars = data;
      }
      )
  }

}
