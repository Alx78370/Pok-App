import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonIdPipe } from '../pipes/pokemon-id.pipe';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [RouterLink, CommonModule, PokemonIdPipe],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent {
  pokemons: any[] = [];
  isPokeballNotCliked: boolean[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getKantoPokemon().subscribe((data: any) => {
      for (let pokemon of data.results) {
        this.pokemonService.getPokemonDetails(pokemon).subscribe((details: any) => {
          this.pokemons.push(details);
          this.isPokeballNotCliked.push(true);
        });
      }
      console.log(this.pokemons);
    });
  }

  togglePokeball(index: number) {
    this.isPokeballNotCliked[index] = !this.isPokeballNotCliked[index];
  }

  getTypeColor(typeName: string): string {
    switch (typeName) {
      case 'normal': return '#A8A77A';
      case 'fighting': return '#C22E28';
      case 'flying': return '#A98FF3';
      case 'poison': return '#A33EA1';
      case 'ground': return '#E2BF65';
      case 'rock': return '#B6A136';
      case 'bug': return '#A6B91A';
      case 'ghost': return '#735797';
      case 'steel': return '#B7B7CE';
      case 'fire': return '#EE8130';
      case 'water': return '#6390F0';
      case 'grass': return '#7AC74C';
      case 'electric': return '#F7D02C';
      case 'psychic': return '#F95587';
      case 'ice': return '#96D9D6';
      case 'dragon': return '#6F35FC';
      case 'dark': return '#705746';
      case 'fairy': return '#D685AD';
      case 'stellar': return '#FFD700';
      default: return '#E5E7EB'; // gray
    }
  }
}
