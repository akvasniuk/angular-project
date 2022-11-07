import {Component, Input} from '@angular/core';

import {ICharacter} from "../../interfaces";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent {
  @Input()
  character: ICharacter;
}
