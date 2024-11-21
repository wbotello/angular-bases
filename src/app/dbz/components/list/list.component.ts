import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();


  //OnDelete = Index value: number

  onDeleteCharacter(id?: string): void {
    this.onDelete.emit( id );
    console.log({ id })
  }
}
