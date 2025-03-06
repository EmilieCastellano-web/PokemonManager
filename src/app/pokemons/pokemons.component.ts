import { Component, Inject } from '@angular/core';
import { DisplayServiceService } from '../Services/display-service.service';

@Component({
  selector: 'app-pokemons',
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
})
export class PokemonsComponent {
  public pokemons: any [];
  public countPokemon: number;

    constructor(
      @Inject(DisplayServiceService) private displayService : DisplayServiceService
    ){
      this.pokemons = this.displayService.pokemons;
      this.countPokemon = this.displayService.countPokemon();
    }


  formatNombre(nombre: number): string {
    if (nombre === null || nombre === 0 || nombre === undefined) {
      return "N/A";
    }
    return nombre.toLocaleString("fr");
  }
}
