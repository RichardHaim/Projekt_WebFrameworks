import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/entities/Cars_Einkauf';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CarService } from './car.service';


@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
})
export class CarsSearchComponent implements OnInit {

    message = '';

    Marke = '';
    Modell= '';
    cars: Array<Cars> = [];
    selectedCar: Cars | undefined;

    constructor(private carService: CarService) { }
  
  ngOnInit(): void {}

  search(): void {
    this.carService
      .find(this.Marke, this.Modell)
      .subscribe({
        next: (cars) => {
          this.cars = cars;
        },
        error: (errResp) => {
          console.error('Error loading Cars', errResp);
      }
    });
  }

  select(c: Cars): void {
    this.selectedCar = c;   
    }

  save(): void {

    if (!this.selectedCar) return;


    this.carService
        .save(this.selectedCar)
        .subscribe({
            next: (cars) => {
                this.selectedCar = cars;
                this.message = 'Update successful!';
            },
            error: (errResponse) => {
                this.message = 'Error on updating the Car';
                console.error(this.message, errResponse);
            }

            
            
    });
}}

