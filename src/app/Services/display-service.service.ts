import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {
  pokemons: any = [
  
    {id: 1, name : "Bulbizarre", categorie:  "Graine ", types : ["Plante", "Poison"], taille: 0.7,poids:  6.9},
    {id: 2, name : "Herbizarre", categorie: "Graine", types: ["Plante", "Poison"],  taille: 1, poids: 13},
    {id: 3, name : "Florizarre", categorie: "Graine", types: ["Plante", "Poison"],  taille: 2, poids: 100},
    {id: 4, name : "Salamèche", categorie: "Lézard ", taille: 0.60, types: ["Feu"],  poids: 8.5},
    {id: 5, name : "Reptincel", categorie: "Flamme ", taille: 1.1, types: ["Feu"],  poids: 19},
    {id: 6, name : "Dracaufeu", categorie: "Flamme ", taille: 1.7, types: ["Feu"],  poids: 90.5}
  ]
  constructor() { }

  countPokemon() : number{
    let nbPokemon = 0;
    for (let i = 0; i < this.pokemons.length; i++) {
      nbPokemon++;
    }
    return nbPokemon;
  }
}
