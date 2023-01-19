import { Component, OnInit } from '@angular/core';
import { Buchhaltung } from 'src/app/entities/Buchhaltung';
import { BuchhaltungService } from '../buchhaltung.service';

@Component({
    selector: 'app-buchhaltung',
    templateUrl: './buchhaltung.component.html',
    styleUrls: ['./buchhaltung.component.css']
})
export class BuchhaltungComponent implements OnInit {

    Buchhaltung_Suche: Array<Buchhaltung> = [];
    selectedEntry: Buchhaltung | undefined ;
    basket: Record<number, boolean> = { }


    constructor(private BuchhaltungService: BuchhaltungService) { }

    ngOnInit(): void { }

    bilanz(EURin: number, EURout: number) {
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

    select(b:Buchhaltung): void {
      this.selectedEntry = b;
    }

}