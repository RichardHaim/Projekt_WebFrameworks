import { Component, Input, OnInit } from '@angular/core';
import { Buchhaltung } from 'src/app/entities/Buchhaltung';
import { BuchhaltungService } from '../buchhaltung.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-buchhaltung',
    templateUrl: './buchhaltung.component.html',
    styleUrls: ['./buchhaltung.component.css']
})
export class BuchhaltungComponent implements OnInit {

    Buchhaltung_Suche: Array<Buchhaltung> = [];
    //Buchhaltung_add: Array<Buchhaltung> = [];
    selectedEntry: Buchhaltung | undefined ;
    newEntry: Buchhaltung | undefined;
    /*
    newEntryGroup = new FormGroup({
      newEntry_EURin : new FormControl(""),
      newEntry_EURout : new FormControl("")
    });
    newUpdateGroup = new FormGroup({
      updateEURin : new FormGroup(""),
      updateEURout : new FormGroup("")
    });
    */
    toDisplay = false;
    toDisplay_selection = false;
    Bilanz: number = 9999;
    maxID: number = 0;
    message: string = "";


    constructor(private BuchhaltungService: BuchhaltungService) { }

    ngOnInit(): void {

    }

    toggleDisplay_entry() {
      this.toDisplay = true;
    }

    toggleDisplay_selection(){
      this.toDisplay_selection = true;
    }

    bilanz(EURin: any, EURout: any) {
      const bilanzwert = EURin - EURout;
      return bilanzwert;
    }
/*
    bilanz_newentry(EURin: any, EURout: any) {
      const bilanzwert = EURin - EURout;
      return bilanzwert;
    }
*/
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

    update(selection: any):void{
      this.BuchhaltungService
      .change(selection)
      .subscribe()
    }

    create(selection: any): void {
      // holt sich via get_einkaufsdaten() die Summe der Einkaufspreise & Anzahl der Einträge
      // holt sich via get_verkaufsdaten() die Summe der Verkaufspreise & Anzahl der Einträge
      this.BuchhaltungService
        .post_bilanz(selection)
        .subscribe()

      // Greift auf Service-Funktion post_Bilanz zu
      // Soll die Daten in den array "Buchhaltung_add" speichern, welcher dann für 
    }

/*
    select(b:Buchhaltung): void {
      this.selectedEntry = b;
    }
*/
}