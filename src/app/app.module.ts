import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FotoModule}  from './components/foto/foto.module';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    CabecalhoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
