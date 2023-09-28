import { Component, Input } from '@angular/core';
import { Race } from 'src/app/core/models/Race.model';
import {RaceService} from "../../core/services/race.service";
import Character from "../../core/models/Character";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  @Input() race?: Race;
  @Input() character!: Character;


  constructor(private raceService: RaceService) {
  }

}
