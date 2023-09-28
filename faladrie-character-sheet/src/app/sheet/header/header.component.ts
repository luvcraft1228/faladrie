import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Race} from "../../core/models/Race.model";
import {RaceService} from "../../core/services/race.service";
import Character from "../../core/models/Character";
import {CharacterService} from "../../core/services/character.service";
import { isEmpty } from 'lodash'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  @Input() races!: Race[];
  @Input() character!: Character;
  @Output() selectRace = new EventEmitter<Race>();

  selectedRace?: Race;

  constructor(
    private raceService: RaceService,
  ) {
    this.selectedRace = this.raceService.selectedRace;
  }


  selectRaceFn() {
    if (this.selectedRace) {
      this.selectRace.emit(this.selectedRace);
      this.raceService.setSelectedRace(this.selectedRace);
    }
  }

  setProperties() {
    if (isEmpty(this.character.properties)) {

    }
  }
}
