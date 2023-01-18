import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cars } from 'src/app/entities/Cars_Einkauf';

@Component({
  selector: 'app-einkauf-card',
  templateUrl: './einkauf-card.component.html',
  styleUrls: ['./einkauf-card.component.css']
})
export class EinkaufCardComponent implements OnInit {


  constructor() { }

  
  @Input() item: Cars | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }


toggleSelection(): void {
  this.selected = this.selected ? false : true;
  this.selectedChange.emit(this.selected);
}
}



