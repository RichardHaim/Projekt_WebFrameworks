import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Buchhaltung } from 'src/app/entities/Buchhaltung';
import { BuchhaltungComponent } from '../buchhaltungsmanagement/buchhaltung.component';

@Component({
  selector: 'app-buchhaltung-card',
  templateUrl: './buchhaltung-card.component.html',
  styleUrls: ['./buchhaltung-card.component.css']
})
export class BuchhaltungCardComponent implements OnInit {

  constructor() { }

  @Input() item: Buchhaltung | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  bilanz(EURin: number, EURout: number) {
    this.bilanz(EURin, EURout);
  }

  toggleSelection(): void {
    this.selected = this.selected ? false: true;
    this.selectedChange.emit(this.selected);
  }
}
