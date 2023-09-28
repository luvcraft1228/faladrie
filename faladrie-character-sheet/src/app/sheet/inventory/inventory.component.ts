import {AfterViewInit, Component, Input} from '@angular/core';
import Character from "../../core/models/Character";
import {isEmpty} from "lodash";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements AfterViewInit{

  inventory : { name : string }[] = [];
  @Input() character!: Character;


  constructor() {

  }

  ngAfterViewInit() {
    if (!isEmpty(this.character.inventory)) {
      this.inventory = this.character.inventory;
    } else {
      for (let i = 0; i < 21; i++) {
        this.inventory.push({ name: '' });
      }
      this.character.inventory = this.inventory;
    }
  }

}
