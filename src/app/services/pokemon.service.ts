import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  private searchQuerySubject = new BehaviorSubject<string>('');
  searchQuery = this.searchQuerySubject.asObservable();

  constructor() { }

  getKantoPokemon() {
    return this.http.get(this.apiUrl);
  }
  getPokemonTypes() {
    return this.http.get('https://pokeapi.co/api/v2/type');
  }
  getPokemonDetails(pokemon: any) {
    return this.http.get(pokemon.url);
  }
  getPokemonById(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
  getEvolutionsChainById(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
  }
  getSpeciesById(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  }

  setSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

}
