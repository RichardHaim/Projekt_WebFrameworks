import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/entities/Cars_Einkauf';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EinkaufService } from './Einkauf.service';


@Component({
  selector: 'app-Einkauf',
  templateUrl: './Einkauf.component.html',
})
export class EinkaufComponent implements OnInit {

    message = '';

    Marke = '';
    Modell= '';
    Cars: Array<Cars> = [];
    selectedCars: Cars | undefined;

    basket: Record<number, boolean> = {
    };

    constructor(private EinkaufService: EinkaufService) { }
  
  ngOnInit(): void {}

  search(): void {
    this.EinkaufService
      .find(this.Marke, this.Modell)
      .subscribe({
        next: (Cars) => {
          this.Cars = Cars;
        },
        error: (errResp) => {
          console.error('Error loading Cars', errResp);
      }
    });
  }

  select(c: Cars): void {
    this.selectedCars = c;   
    }

  save(): void {

    if (!this.selectedCars) return;


    this.EinkaufService
        .save(this.selectedCars)
        .subscribe({
            next: (Cars) => {
                this.selectedCars = Cars;
                this.message = 'Update successful!';
            },
            error: (errResponse) => {
                this.message = 'Error on updating the Car';
                console.error(this.message, errResponse);
            }

            
            
    });
}}

