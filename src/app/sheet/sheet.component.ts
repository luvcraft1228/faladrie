import {Component, OnInit} from '@angular/core';
import { Race } from '../core/models/Race.model';
import {RaceService} from "../core/services/race.service";
import {CharacterService} from "../core/services/character.service";
import Character from "../core/models/Character";

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})

export class SheetComponent implements OnInit {
  races!: Race[];
  selectedRace?: Race;
  character!: Character;

  constructor(
    private raceService: RaceService,
    private characterService: CharacterService) {
  }

  ngOnInit() {
    this.initRaces();
    this.selectedRace = this.raceService.selectedRace;
    this.character = this.characterService.savedCharacter;
    console.log('saved Character : ', this.character);
  }

  save() {
    console.log('character to save : ', this.character);
    this.characterService.saveCharacter(this.character);
  }

  selectRace(race: Race) {
    this.selectedRace = race;
  }

  initRaces() {
    this.races = [
      new Race({
        essenceNat: 15,
        healthMax: 10,
        healthMin: 5,
        name: "Lyonniens",
        physical: { freeSlots: 0, maxSlots: 3 },
        social: { freeSlots: 1, maxSlots: 4 },
        spirit: { freeSlots: 0, maxSlots: 3 },
        tech: { freeSlots: 2, maxSlots: 5 },
        physicalProperties: [
          { name: 'Sexe', short: true },
          { name: 'Age', short: true },
          { name: 'Grandeur', short: true },
          { name: 'Poid', short: true },
          { name: 'Couleur de peau', short: false },
        ]
      }),
      new Race({
        essenceNat: 20,
        healthMax: 15,
        healthMin: 5,
        name: "Chizique",
        physical: { freeSlots: 1, maxSlots: 4 },
        social: { freeSlots: 0, maxSlots: 3 },
        spirit: { freeSlots: 2, maxSlots: 5 },
        tech: { freeSlots: 0, maxSlots: 3 },
        physicalProperties: [
          { name: 'Sexe', short: true },
          { name: 'Age', short: true },
          { name: 'Grandeur', short: true },
          { name: 'Poid', short: true },
          { name: 'Couleur de cheveux', short: false },
          { name: 'Tache', short: false }
        ]
      }),
      new Race({
        essenceNat: 10,
        healthMax: 25,
        healthMin: 5,
        name: "Kunt",
        physical: { freeSlots: 2, maxSlots: 5 },
        social: { freeSlots: 0, maxSlots: 3 },
        spirit: { freeSlots: 0, maxSlots: 3 },
        tech: { freeSlots: 1, maxSlots: 4 },
        physicalProperties: [
          { name: 'Sexe', short: true },
          { name: 'Age', short: true },
          { name: 'Grandeur', short: true },
          { name: 'Poid', short: true },
          { name: 'Clan', short: false }
        ]
      })
    ]
  }

}



