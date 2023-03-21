import {Component, OnInit} from '@angular/core';
import { State } from './models/state';

import BundeslandJson from '../assets/bundesland.json';
import {PersonIndex} from "./models/personIndex";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bundesland-frontend';

  stateList: State[] = [];
  personIndexCount: PersonIndex[] = [];

  ngOnInit() {
    let stateArray = BundeslandJson.stateList;
    for (const e of stateArray) {
      let element = new State(e.count, e.foreignCountry, e.letter, e.name,
        e.schoolCount, e.stadtStaat, e.url);
      this.stateList.push(element);
    }
    console.log(this.stateList);

    let personIndex = BundeslandJson.personIndexCounts;
    let p: keyof typeof personIndex;
    for (p in personIndex) {
      if (personIndex[p] > 0) {
        let element = new PersonIndex(p, personIndex[p]);
        this.personIndexCount.push(element);
      }
    }
    console.log(this.personIndexCount);
  }
}
