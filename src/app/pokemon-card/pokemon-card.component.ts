import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

type PokeType = 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' | 'fight' | 'poison' | 'ground' | 'psychic' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  typeColor:string = ''
  pokeName:string = 'Ditto'
  
  getPokemon(){

  }

  getPokeType():PokeType{
    const pokeType = 'normal';

    switch(pokeType){
      case 'normal':
        this.typeColor = 'background-color:#A8A77A'
        break
    }
    return 'normal'
  }
  
}
