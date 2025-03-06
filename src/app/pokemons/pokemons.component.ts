import { Component } from '@angular/core';
//import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
  //providers: [DecimalPipe],
})
export class PokemonsComponent {
 
   pokemons: any = [
  
      {id: 1, name : "Bulbizarre", categorie:  "Graine ", type : "Plante et poison", taille: 0.7,poids:  6.9},
      {id: 2, name : "Herbizarre", categorie: "Graine", type: "Plante et poison",  taille: 1, poids: 13},
      {id: 3, name : "Florizarre", categorie: "Graine", type: "Plante et poison",  taille: 2, poids: 100},
      {id: 4, name : "Salamèche", categorie: "Lézard ", taille: 0.60, type: "Feu",  poids: 8.5},
      {id: 5, name : "Reptincel", categorie: "Flamme ", taille: 1.1, type: "Feu",  poids: 19},
      {id: 6, name : "Dracaufeu", categorie: "Flamme ", taille: 1.7, type: "Feu",  poids: 90.5}
    ]
    constructor(){
  }

  formatNombre(nombre: number): string {
    if (nombre === null || nombre === 0 || nombre === undefined) {
      return "N/A";
    }
    return nombre.toLocaleString("fr");
  }
}
