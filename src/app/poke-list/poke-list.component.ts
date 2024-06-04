import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonIdPipe } from '../pipes/pokemon-id.pipe';
import { Pokemon } from '../Models/pokemon';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [RouterLink, CommonModule, PokemonIdPipe],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent {
  pokemons: Pokemon[] = [];
  pokemonNoFilter: Pokemon[] = [];
  pokemonTypes: any = [];
  isPokeballNotCliked: boolean[] = [];
  isShowMenu: boolean = false;
  type:string = '';


  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getKantoPokemon().subscribe((data: any) => {
      for (let pokemon of data.results) {
        this.pokemonService.getPokemonDetails(pokemon).subscribe((details: any) => {
          this.pokemons.push(details);
          this.pokemonNoFilter.push(details);
          this.isPokeballNotCliked.push(true);
        });
      }
      console.log(this.pokemons);
    });
    this.pokemonService.getPokemonTypes().subscribe((data: any) => {
      this.pokemonTypes = data.results;
      console.log(this.pokemonTypes);
    });

  }

  ngOnDestroy() {
    this.pokemons = [];
    this.isPokeballNotCliked = [];
  }

  togglePokeball(index: number) {
    this.isPokeballNotCliked[index] = !this.isPokeballNotCliked[index];
  }

  getTypeColor(type: string) {
    return this.pokemonService.getTypeColor(type);
  }

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  filterByType(value: string) {
    this.resetFilter()
    if (this.type = value) {
      this.pokemons = this.pokemons.filter(pokemon => pokemon.types[0].type.name.includes(value));
    }
  }

  resetFilter() {
    this.pokemons = this.pokemonNoFilter;

  }

}
