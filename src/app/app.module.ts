import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BuchhaltungModule } from './buchhaltung/buchhaltung.module';
import { SharedModule } from './shared/shared.module';
import { EinkaufModule } from './Einkauf/einkauf.module';
import { VerkaufModule } from './verkauf/verkauf.module';

@NgModule({
  imports: [
    BuchhaltungModule,
    EinkaufModule,
    VerkaufModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
