import {Component, Input, OnInit} from '@angular/core';

import {ICharacter} from "../../interfaces";
import {CharacterService} from "../../services";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  @Input()
  charactersUrl: string[];
  characters: ICharacter[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.charactersUrl.forEach(url => {
      this.characterService.get(url).subscribe(character => this.characters.push(character));
    })
  }

}
