import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EinkaufComponent } from './Einkauf/einkaufsmanagement/Einkauf.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VerkaufComponent } from './verkauf/verkaufsmanagement/verkauf.component';
import { EinkaufCardComponent } from './Einkauf/einkauf-card/einkauf-card.component';
import { BuchhaltungCardComponent } from './buchhaltung/buchhaltung-card/buchhaltung-card.component';
import { BuchhaltungComponent } from './buchhaltung/buchhaltungsmanagement/buchhaltung.component';

@NgModule({
  
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    VerkaufComponent,
    BuchhaltungComponent,
    EinkaufComponent,
    EinkaufCardComponent,
    BuchhaltungCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
