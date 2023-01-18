import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EinkaufComponent } from './Einkauf/einkaufsmanagement/Einkauf.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EinkaufCardComponent } from './Einkauf/einkauf-card/einkauf-card.component';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BuchhaltungModule } from './buchhaltung/buchhaltung.module';
import { VerkaufsmanagementComponent } from './verkauf/verkaufsmanagement/verkaufsmanagement/verkaufsmanagement.component';
import { VerkaufCardComponent } from './verkauf/verkaufsmanagement/verkauf-card/verkauf-card.component';

@NgModule({
  
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    EinkaufComponent,
    EinkaufCardComponent,
    VerkaufsmanagementComponent,
    VerkaufCardComponent
  ],
  imports: [
    BuchhaltungModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
