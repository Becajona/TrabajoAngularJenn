import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent1 } from './contador/contador.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { ListadoComponent } from './personajes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorComponent1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
