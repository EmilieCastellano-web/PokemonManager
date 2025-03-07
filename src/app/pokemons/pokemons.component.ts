import { Component, Inject } from '@angular/core';
import { PokemonService } from '../Services/pokemon-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemons',
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
})
export class PokemonsComponent {
  public pokemons: any [];
  public pokemonDetail: any [];
  content: string = "";

    constructor(
      @Inject(PokemonService) private pokemonService : PokemonService,
    ){
      this.pokemons = [];
      this.getPokemon();
      this.pokemonDetail = [];
    }


  formatNombre(nombre: number): string {
    if (nombre === null || nombre === 0 || nombre === undefined) {
      return "N/A";
    }
    nombre /= 10;
    return nombre.toLocaleString("fr");
  }

  getPokemon(): void{
      this.pokemonService.getPokemonApi().subscribe({
        next: (data: any) => {
          console.log("Données reçues :");
          this.pokemons = data.results || [];
          this.pokemons.forEach((pokemon, index) => {
            this.getPokemonDetails(pokemon.url, index);
          
          });
          // setTimeout(() => {
          //   for (let i = 0; i < this.pokemons.length; i++) {
          //     this.pokemons.sort(this.pokemons.details.id)
              
          //   }
            
          // }, 1000);
        },
        error: (err) => {
        console.error("Erreur API :", err);
        },
        complete: () => {
          console.log("La requête a bien été effectuée !");
          
        } 
      });
      
  }

  getPokemonDetails(url: string, index: number): void{
    this.pokemonService.getPokemonDetailsApi(url).subscribe({
      next: (details: any) => {
        console.log(`Détails de ${details.name} reçus :`, details);
  
        // Met à jour les Pokémon avec leurs détails
        this.pokemons[index] = { ...this.pokemons[index], details };
      },
    });
      
 }


}   
