import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/entities/Cars';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
})
export class CarsSearchComponent implements OnInit {

    Marke = '';
    Modell= '';
    cars: Array<Cars> = [];
    selectedCar: Cars | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  search(): void {
    const url = 'localhost:3000/cars';

    const headers = new HttpHeaders()
        .set('Accept', 'application/json');

    const params = new HttpParams()
        .set('Marke', this.Marke)
        .set('Modell', this.Modell);

    this.http
        .get<Cars[]>(url, {headers, params})
        .subscribe({
            next: (cars: Cars[]) => {
                this.cars = cars;
            },
            error: (errResp) => {
                console.error('Error loading cars', errResp);
            }
        });
      }

  select(c: Cars): void {
    this.selectedCar = c;   
    }
  }