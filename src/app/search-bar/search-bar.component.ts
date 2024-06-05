import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validator } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  newSearch = new FormGroup({
    search: new FormControl('')
  });

  constructor() { }

  submitSearch() {



  }
}
