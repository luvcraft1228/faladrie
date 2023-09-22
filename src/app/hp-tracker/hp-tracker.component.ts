import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hp-tracker',
  templateUrl: './hp-tracker.component.html',
  styleUrls: ['./hp-tracker.component.css']
})

export class HpTrackerComponent implements OnInit {

  wound!: number;

  ngOnInit() {
    this.wound = 0;
  }

  upgradeWound () {
    if (this.wound < 3) {
      this.wound++;
    } else {
      this.wound = 0;
    }
  }

}
