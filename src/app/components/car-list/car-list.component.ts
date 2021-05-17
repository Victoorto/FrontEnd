import { Component, OnInit, Type } from '@angular/core';
import {  CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/common/car';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list-table.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  Cars: Car[];
  currentCarType: string;

  constructor(private route: ActivatedRoute,  //Useful fo accesing for route parameters
              private carService: CarService,) { }

              
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listCars();
    });
   
  }
 

  listCars(){
    //Check if the parameter is available 
    const hasCarType: boolean = this.route.snapshot.paramMap.has('id');
    console.log(hasCarType)
    
    if(hasCarType){
        this.currentCarType = "sedan";
      }

    

    this.carService.getCarList(this.currentCarType).subscribe(
      data =>{
        this.Cars = data;
      }
      );
  }

}
