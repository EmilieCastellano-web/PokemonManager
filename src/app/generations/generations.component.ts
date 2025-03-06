import { Component, Inject } from '@angular/core';
import { PokemonService } from '../Services/pokemon-service.service';

@Component({
  selector: 'app-generations',
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  public generations: any[];
 


  constructor(@Inject(PokemonService) private pokemonService: PokemonService) { 
    this.generations = [];
    this.getGenerations();
  }
  

  getGenerations(): void{
    this.pokemonService.getGenerationApi().subscribe({
      next: (data: any) => {
        console.log("Données reçues :", data);
        this.generations = data.results?.map((gen: any) => gen.name) || [];
      },
      error: (err) => {
        console.error("Erreur API :", err);
      },
      complete: () => {
        console.log("La requête a bien été effectuée !");
      }
    });
  }

}
