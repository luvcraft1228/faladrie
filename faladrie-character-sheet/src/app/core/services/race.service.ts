import { Injectable } from '@angular/core';
import { Race } from '../models/Race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  setSelectedRace(race: Race) {
    localStorage.setItem('selectedRace', JSON.stringify(race));
  }

  get selectedRace(): Race | undefined {
    const storedRace = localStorage.getItem('selectedRace');
    if (storedRace) {
      return JSON.parse(storedRace);
    } else { return undefined }
  }
}
