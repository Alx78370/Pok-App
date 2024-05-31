import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor() { }

  getKantoPokemon() {
    return this.http.get(this.apiUrl);
  }
  getPokemonDetails(pokemon: any) {
    return this.http.get(pokemon.url);
  }
}
