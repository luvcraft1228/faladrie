import {Component, Input} from '@angular/core';
import Character from "../../core/models/Character";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  @Input() character!: Character;

}
