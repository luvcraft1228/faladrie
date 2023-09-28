import {AfterViewInit, Component, Input, OnChanges} from '@angular/core';
import {Race} from "../../../core/models/Race.model";
import {RaceService} from "../../../core/services/race.service";
import {SkillInterface} from "../../../core/models/interfaces/race.interface";
import {skip} from "rxjs";
import SkillLineInterface from "../../../core/models/interfaces/skillLine.interface";
import {CharacterSkillInterface} from "../../../core/models/interfaces/character.interface";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnChanges {

  @Input() skill?: SkillInterface;
  @Input() name? : string;
  @Input() characterSkill?: CharacterSkillInterface[];
  skillLines: SkillLineInterface[] = []

  constructor() {

  }

  ngOnChanges() {
    if (this.skill) {
      this.createSkillLines(this.skill);
    }
  }

  createSkillLines(skill: SkillInterface) {
    const skillLines: SkillLineInterface[] = [];
    let numberOfCircles = 0;
    for (let i = 0; i < skill.maxSlots; i++) {
      const calc: number = i - skill.freeSlots;
        if (calc >= 0) {
          numberOfCircles++;
        }
        skillLines.push({ firstLevelCircles : numberOfCircles })
    }
    this.skillLines = skillLines;
  }


  protected readonly skip = skip;
}
