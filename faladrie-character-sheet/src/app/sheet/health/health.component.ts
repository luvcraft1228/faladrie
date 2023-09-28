import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Race } from 'src/app/core/models/Race.model';
import Character from "../../core/models/Character";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnChanges {
  @Input() race?: Race;
  @Input() character!: Character;
  minHealth : { status: number }[] = []
  maxHealth : { status: number }[] = []


  ngOnChanges() {
    if (this.race) {
      this.minHealth = Array(this.race.healthMin).fill({ status: 0 });
      this.maxHealth = Array(this.race.healthMax - this.race.healthMin).fill({ status: 0 });

    }
  }

}
