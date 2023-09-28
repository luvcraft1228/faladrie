import { Injectable } from '@angular/core';
import Character from "../models/Character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  get savedCharacter() {
    const charString = localStorage.getItem('character')
    if (charString) {
      return new Character(JSON.parse(charString)) ;
    }
    else return new Character();
  }

  saveCharacter(character: Character) {
    localStorage.setItem('character', JSON.stringify(character));
  }
}
