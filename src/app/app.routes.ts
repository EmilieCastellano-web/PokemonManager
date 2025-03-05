import { Routes } from '@angular/router';
import { GenerationsComponent } from './generations/generations.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

export const routes: Routes = [
    {path: "generations", component: GenerationsComponent},
    {path: "pokemons", component: PokemonsComponent}
];
