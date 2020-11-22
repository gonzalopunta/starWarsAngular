import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculasResponse } from '../interfaces/peliculas-response.interface';

const URL="https://swapi.co/api/films/";
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PeliculasResponse> {
    return this.http.get<PeliculasResponse>(
       URL,
       requestOptions
    );
  }
}
