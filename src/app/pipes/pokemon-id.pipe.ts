import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonId',
  standalone: true
})
export class PokemonIdPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 10) {
      return `00${value}`;
    } else if (value < 100) {
      return `0${value}`;
    }
    return value.toString();
  }

}
