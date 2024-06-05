import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  newSearch = new FormGroup({
    search: new FormControl ?? ''
  });

  constructor(private pokemonService: PokemonService) { }

  submitSearch() {
    this.pokemonService.setSearchQuery(this.newSearch.get('search')?.value || '');
  }
}
