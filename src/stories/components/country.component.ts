import { Component, Input, Output, EventEmitter } from '@angular/core';
import {State} from "../../app/models/state";

@Component({
  selector: 'country',
  template: `
    <ul>
        <li *ngFor="let country of countryData"><a [href]="country.url">
            <p class="title">{{ country.name }}</p>
            <p class="number">{{ country.schoolCount }} Schulen</p>
        </a></li>
    </ul>`,
  styleUrls: ['./country.scss'],
})
export default class CountryComponent {
  @Input()
  countryData: State[] | undefined;
}
