import {Component, Input} from '@angular/core';
import {Race} from "../../core/models/Race.model";

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrls: ['./essence.component.css']
})
export class EssenceComponent {
  @Input() race?: Race;

}
