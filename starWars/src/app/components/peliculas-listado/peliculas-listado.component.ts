import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/Services/peliculas.service';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.scss']
})
export class PeliculasListadoComponent implements OnInit {

  listadoPeliculas: Peliculas[];
  columnsToDisplay = ['title', 'episode_id', 'director', 'producer'];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.cargaPeliculas();
  }

  cargaPeliculas() {
    this.peliculasService.getPlanets().subscribe(resp => {
       this.listadoPeliculas = resp.results;
    });
 }

}
