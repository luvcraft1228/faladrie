import {Component, Input, OnChanges} from '@angular/core';
import {Race} from "../../core/models/Race.model";
import Character from "../../core/models/Character";

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrls: ['./essence.component.css']
})
export class EssenceComponent implements OnChanges {
  @Input() race?: Race;
  @Input() character!: Character;

  essence?: { status: 0 }[]

  ngOnChanges() {
    if (this.race) {
      this.essence = Array(this.race.essenceNat).fill({ status: 0 });
    }
  }
}
