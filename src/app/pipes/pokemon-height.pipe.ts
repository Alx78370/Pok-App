import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonHeight',
  standalone: true
})
export class PokemonHeightPipe implements PipeTransform {

  transform(value: number): number {
    return value * 10;
  }

}
