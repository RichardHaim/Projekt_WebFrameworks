import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cars_Verkauf } from 'src/app/entities/Cars_Verkauf';

@Component({
  selector: 'app-verkauf-card',
  templateUrl: './verkauf-card.component.html',
  styleUrls: ['./verkauf-card.component.css']
})
export class verkaufCardComponent implements OnInit {


  constructor() { }

  
  @Input() item: Cars_Verkauf | undefined;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }


toggleSelection(): void {
  this.selected = this.selected ? false : true;
  this.selectedChange.emit(this.selected);
}
}



