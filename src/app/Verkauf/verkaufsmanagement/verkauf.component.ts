import { Component, OnInit } from '@angular/core';
import { Cars_Verkauf } from 'src/app/entities/Cars_Verkauf';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { VerkaufService } from '../verkauf.service';


@Component({
  selector: 'app-verkauf',
  templateUrl: './verkauf.component.html',
  styleUrls: ['./verkauf.component.css']
})
export class VerkaufComponent implements OnInit {

  message = '';

    Marke = '';
    Modell= '';
    Cars: Array<Cars_Verkauf> = [];
    selectedCars: Cars_Verkauf | undefined;

    basket: Record<number, boolean> = {
    };

  constructor(private VerkaufService: VerkaufService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.VerkaufService
      .find(this.Marke, this.Modell)
      .subscribe({
        next: (Cars_Verkauf) => {
          this.Cars = Cars_Verkauf;
        },
        error: (errResp) => {
          console.error('Error loading Cars', errResp);
      }
    });
  }

  select(c: Cars_Verkauf): void {
    this.selectedCars = c;   
    }

    save(): void {

      if (!this.selectedCars) return;
  
  
      this.VerkaufService
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
    
      this.VerkaufService 
      .update(value)
      .subscribe({
        next: (selectedCars) => {
        this.message = 'Neuer Preis gespeichert';
      },
        error: (errResponse) => {
        this.message = 'fehlgeschlagen';
        console.error(this.message, errResponse);
    }
   })

}

remove(value: any): void {
      
  this.VerkaufService
  .remove(value)
  .subscribe({
    next: (Cars_Verkauf) =>{
    this.message = 'Eintrag gelöscht';
  },
  error: (errResponse) => {
  this.message = 'Preisupdate fehlgeschlagen';
  console.error(this.message, errResponse)
}
})}
create(selection: any): void {
  this.VerkaufService
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