import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Race} from "../../core/models/Race.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  @Input() races!: Race[];
  @Output() selectRace = new EventEmitter<Race>();

  selectedRace?: Race;

}
