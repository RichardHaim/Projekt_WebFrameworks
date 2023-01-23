import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/entities/Cars_Einkauf';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EinkaufService } from '../Einkauf.service';


@Component({
  selector: 'app-Einkauf',
  templateUrl: './Einkauf.component.html',
})
export class EinkaufComponent implements OnInit {

    message = '';

    Marke = '';
    Modell= '';
    PS='';
    Hubraum='';
    Beschleunigung='';
    Gewicht='';
    Baujahr='';
    Einkaufspreis='';
    id=''

    Cars: Array<Cars> = [];
    selectedCars: Cars | undefined;
    newEntry: EinkaufComponent | undefined ;

    basket: Record<number, boolean> = {
    };

     // Übernommen von Richard - gleiches Prinzip
    Buchhaltung_Suche: Array<EinkaufComponent> = [];
    
    selectedEntry: EinkaufComponent | undefined ;
    //newEntry: EinkaufComponent | undefined;

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
  }

    update(value: any): void {
    
        this.EinkaufService 
        .update(value)
        .subscribe({
          next: (selectedCars) => {
          this.message = 'Neuer Preis gespeichert';
        },
          error: (errResponse) => {
          this.message = 'Preisupdate fehlgeschlagen';
          console.error(this.message, errResponse);
      }
     })}
    
    remove(value: any): void {
      
        this.EinkaufService
        .remove(value)
        .subscribe({
          next: (selectedCars) =>{
          this.message = 'Eintrag gelöscht';
        },
        error: (errResponse) => {
        this.message = 'Preisupdate fehlgeschlagen';
        console.error(this.message, errResponse)
      }
      })}
      create(selection: any): void {
        this.EinkaufService
          .post_new_Eintrag(selection)
          .subscribe({
            next: (selectedCars) =>{
            this.message = 'Eintrag gelöscht';
          },
          error: (errResponse) => {
          this.message = 'Eintrag fehlgeschlagen';
          console.error(this.message, errResponse)
        }
        })
          
    
    
    }}
