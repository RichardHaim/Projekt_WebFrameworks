import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { VerkaufComponent } from './verkaufsmanagement/verkauf.component';
import { VERKAUF_ROUTES } from './verkauf.routes';
import { verkaufCardComponent } from './verkauf-card/verkauf-card.component';

@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild(VERKAUF_ROUTES)
    ],

    declarations: [
      VerkaufComponent,
      verkaufCardComponent
    ],

    providers: [],
    
    exports: [
      VerkaufComponent
    ]

  })
export class VerkaufModule { }