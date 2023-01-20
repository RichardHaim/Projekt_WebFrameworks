import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { EinkaufComponent } from './einkaufsmanagement/Einkauf.component';
import { EinkaufCardComponent } from './einkauf-card/einkauf-card.component';
import { EINKAUF_ROUTES } from './einkauf.routes';

@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild(EINKAUF_ROUTES)
    ],

    declarations: [
      EinkaufComponent,
      EinkaufCardComponent
    ],

    providers: [],
    
    exports: [
      EinkaufComponent
    ]

  })
export class EinkaufModule { }