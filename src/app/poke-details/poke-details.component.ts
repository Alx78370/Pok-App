import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../Models/pokemon';
import { EvolutionChain } from '../Models/evolution-chain';
import { CommonModule } from '@angular/common';
import { PokemonIdPipe } from '../pipes/pokemon-id.pipe';
import { PokemonHeightPipe } from '../pipes/pokemon-height.pipe';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-poke-details',
  standalone: true,
  imports: [CommonModule, PokemonIdPipe, PokemonHeightPipe],
  templateUrl: './poke-details.component.html',
  styleUrl: './poke-details.component.css'
})
export class PokeDetailsComponent {
  pokemonDetails: Pokemon[] = [];
  pokemonImages: any = [];
  pokemonSpecies:any = [];
  pokemonEvolutions: EvolutionChain[] = [];
  pokeId: number = this.route.snapshot.params['id'];

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.pokemonService.getPokemonById(this.pokeId).pipe(
      tap((data: any) => {
        this.pokemonDetails.push(data);
        this.pokemonImages = data.sprites;
      }),
      switchMap((data: any) => this.pokemonService.getSpeciesById(data.id)),
      tap((data: any) => {
        this.pokemonSpecies.push(data);
      }),
      switchMap((data: any) => this.pokemonService.getEvolutionsChainById(data.id)),
      tap((data: any) => {
        this.pokemonEvolutions.push(data.chain);
      }),
      catchError((error: any) => {
        console.error(error);
        return of(error);
      })
    ).subscribe();
  }


  ngOnDestroy() {
    this.pokemonDetails = [];
    this.pokemonEvolutions = [];
    this.pokemonSpecies = [];
  }

  getTypeColor(type: string) {
    return this.pokemonService.getTypeColor(type);
  }

  extractIdFromUrl(url: string) : number {
    const regex = /\/(\d+)\/?$/;
    const match = url.match(regex);
    return match ? parseInt(match[1], 10) : 0;
  }

}
