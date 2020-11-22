import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetResponse } from './../interfaces/planets-response.interface';

const URL = 'https://swapi.co/api/planets/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
      URL,
      requestOptions
    );
  }
}
