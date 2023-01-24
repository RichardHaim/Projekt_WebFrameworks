import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { VerkaufComponent } from 'c:/Users/kakic/Documents/WebFrameworksProjekt/Projekt_WebFrameworks/src/app/Verkauf/verkaufsmanagement/verkauf.component';
import { verkaufCardComponent } from 'c:/Users/kakic/Documents/WebFrameworksProjekt/Projekt_WebFrameworks/src/app/Verkauf/verkauf-card/verkauf-card.component';
import { VERKAUF_ROUTES } from 'c:/Users/kakic/Documents/WebFrameworksProjekt/Projekt_WebFrameworks/src/app/Verkauf/verkauf.routes';

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