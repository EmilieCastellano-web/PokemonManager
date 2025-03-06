import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemonApi(){
    return this.http.get(environment.apiGetPokemon);
   }

   getGenerationApi(){
    return this.http.get(environment.apiGenerations);
   }

   getPokemonDetailsApi(url : string): any{
    return this.http.get<any>(url);
   }
}
