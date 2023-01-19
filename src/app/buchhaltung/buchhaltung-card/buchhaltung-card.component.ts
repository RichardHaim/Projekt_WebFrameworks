import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Buchhaltung } from 'src/app/entities/Buchhaltung';
import { BuchhaltungService } from '../buchhaltung.service';


@Component({
  selector: 'app-buchhaltung-card',
  templateUrl: './buchhaltung-card.component.html',
  styleUrls: ['./buchhaltung-card.component.css']
})
export class BuchhaltungCardComponent implements OnInit {

  constructor(private buchhaltung_eintrag: BuchhaltungService) { }

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

/*
  toggleSelection(): void {
    this.selected = this.selected ? false: true;
    this.selectedChange.emit(this.selected);
  }
*/
}
