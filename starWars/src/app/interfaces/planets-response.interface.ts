import { Planet } from './Planets.interfaces';
 
export interface PlanetResponse {
    count: number;
    next: string;
    previous?: any;
    results: Planet[];
}
