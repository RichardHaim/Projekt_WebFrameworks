import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BuchhaltungComponent } from './buchhaltungsmanagement/buchhaltung.component';
import { BuchhaltungCardComponent } from './buchhaltung-card/buchhaltung-card.component';
import { RouterModule } from '@angular/router';
import { BUCHHALTUNG_ROUTES } from './buchhaltung.routes';



@NgModule({
  declarations: [
    BuchhaltungComponent,
    BuchhaltungCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(BUCHHALTUNG_ROUTES)
  ],
  exports: [
    BuchhaltungComponent
  ]
})
export class BuchhaltungModule { }
