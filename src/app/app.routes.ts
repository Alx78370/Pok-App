import { Routes } from '@angular/router';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
  { path: 'pokemon/:name/:id', component: PokeDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
