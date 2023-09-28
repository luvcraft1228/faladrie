import {Component, Input} from '@angular/core';
import SkillLineInterface from "../../../core/models/interfaces/skillLine.interface";

@Component({
  selector: 'app-skill-line',
  templateUrl: './skill-line.component.html',
  styleUrls: ['./skill-line.component.css']
})
export class SkillLineComponent {

  @Input() line!: SkillLineInterface;

}
