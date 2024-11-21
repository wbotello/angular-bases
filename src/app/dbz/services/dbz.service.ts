import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character-interface';


@Injectable({
  providedIn: 'root'
})

export class DbzService {
  constructor() { }

  public characteres: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }  ];

  addCharacter(character: Character ): void {
    const newCharacter: Character = { id: uuid(), ...character }

    console.log(newCharacter)

    this.characteres.push(newCharacter);
  }

  // onDeleteCharacter( index: number): void {
  //   this.characteres.splice(index, 1);
  // }
  deleteCharacterById( id?: string): void {
    if ( !id ) return;

    this.characteres = this.characteres.filter( character => character.id !== id);
  }


}
