import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CoursComponent } from './components/cours/cours.component';
import { LocalComponent } from './components/local/local.component';
import { SessionCoursComponent } from './components/session-cours/session-cours.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { InfosComponent } from './components/infos/infos.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    CoursComponent,
    LocalComponent,
    SessionCoursComponent,
    FormateurComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
