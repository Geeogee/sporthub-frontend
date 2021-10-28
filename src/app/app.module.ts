import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UtentiComponent } from './utenti/utenti.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtentiDettagliComponent } from './utenti-dettagli/utenti-dettagli.component';
import { NuovoUtenteComponent } from './nuovo-utente/nuovo-utente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UtentiComponent,
    UtentiDettagliComponent,
    NuovoUtenteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
