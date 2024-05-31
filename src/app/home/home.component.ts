import { Component } from '@angular/core';
import { PokeListComponent } from '../poke-list/poke-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
