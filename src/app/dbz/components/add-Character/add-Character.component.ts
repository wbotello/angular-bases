import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-Character.component.html',
  styleUrl: './add-Character.component.css',
})

export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter() {

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0}
  }
}
