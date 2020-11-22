import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsService } from './Services/planets.service';
import { PlanetsListadoComponent } from './components/planets-listado/planets-listado.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    PeliculasListadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
