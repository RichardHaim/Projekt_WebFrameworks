import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Buchhaltung } from 'src/app/entities/Buchhaltung';
import { BuchhaltungService } from '../buchhaltung.service';
import { BuchhaltungComponent } from '../buchhaltungsmanagement/buchhaltung.component';


@Component({
  selector: 'app-buchhaltung-card',
  templateUrl: './buchhaltung-card.component.html',
  styleUrls: ['./buchhaltung-card.component.css']
})
export class BuchhaltungCardComponent implements OnInit {

  constructor(private buchhaltung_eintrag: BuchhaltungService,
    private buchhaltung_component: BuchhaltungComponent) { }

  @Input() item: Buchhaltung | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();
  message = "";
  

  ngOnInit(): void {
  }

  delete(): void {
    this.buchhaltung_eintrag
      .remove(this.item)
      .subscribe()
    this.message = "Eintrag gelöscht"
  }

  selectMe(selected_case: any):void{
    this.buchhaltung_component.toggleDisplay_selection()
    this.buchhaltung_component.selectedEntry = selected_case
  }

/*
  toggleSelection(): void {
    this.selected = this.selected ? false: true;
    this.selectedChange.emit(this.selected);
  }
*/
}
