import {Component, Input} from '@angular/core';
import {Equipment} from "../../../core/models/interfaces/character.interface";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  @Input() equipment!: Equipment;
}
