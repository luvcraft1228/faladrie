import {Component, OnInit} from '@angular/core';
import { Race } from '../core/models/Race.model';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})

export class SheetComponent implements OnInit {
  races!: Race[];
  selectedRace?: Race;

  ngOnInit() {
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
    console.log('races:  ', this.races)
  }

  selectRace(race: Race) {
    console.log('sheet select race : ', race.name);
    this.selectedRace = race;
  }

}



