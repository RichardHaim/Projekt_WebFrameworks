import { Component, OnInit } from '@angular/core';
import { Buchhaltung } from 'src/app/entities/Buchhaltung';
import { BuchhaltungService } from '../buchhaltung.service';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-buchhaltung',
    templateUrl: './buchhaltung.component.html',
    styleUrls: ['./buchhaltung.component.css']
})
export class BuchhaltungComponent implements OnInit {

    Buchhaltung_Suche: Array<Buchhaltung> = [];
    Buchhaltung_add: Array<Buchhaltung> = [];
    selectedEntry: Buchhaltung | undefined ;
    basket: Record<number, boolean> = {};
    date: Date = new Date(Date.now());
    numbersCarsSold: number = 0;
    numberCarsBought: number = 0;
    EURin: number = 0;
    EURout: number = 0;
    toDisplay = false;
    EURinInput = new FormControl("");
    EURoutInput = new FormControl("");
    Bilanz: number = 0;
    maxID: number = 0;


    constructor(private BuchhaltungService: BuchhaltungService) { }

    ngOnInit(): void { }

    toggleDisplay() {
      this.toDisplay = true;
    }

    generateID(): number {
      return this.maxID;
    }

    bilanz(EURin: any, EURout: any) {
      const bilanzwert = EURin - EURout;
      return bilanzwert;
    }

    search(): void {
      this.BuchhaltungService
      .find()
      .subscribe({
        next: (Buchhaltung) => {
          this.Buchhaltung_Suche = Buchhaltung;
        },
        error: (errResp) => {
          console.error("Error loading the dataset", errResp);
        }
      })
    }


    create(): void {
      // holt sich via get_einkaufsdaten() die Summe der Einkaufspreise & Anzahl der Einträge
      // holt sich via get_verkaufsdaten() die Summe der Verkaufspreise & Anzahl der Einträge
      this.Buchhaltung_add

      // Greift auf Service-Funktion post_Bilanz zu
      // Soll die Daten in den array "Buchhaltung_add" speichern, welcher dann für 
    }

/*
    select(b:Buchhaltung): void {
      this.selectedEntry = b;
    }
*/
}