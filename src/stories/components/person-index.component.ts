import { Component, Input, Output, EventEmitter } from '@angular/core';
import {PersonIndex} from "../../app/models/personIndex";

@Component({
  selector: 'person-index',
  template: ` <ul>
    <li class="person-item" *ngFor="let index of personIndex">
      <span *ngIf="index.amount != 0">{{ index.letter }}</span>
    </li>
  </ul>`,
  styleUrls: ['./person-index.scss'],
})
export default class PersonIndexComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  personIndex: PersonIndex[] | undefined;
}
