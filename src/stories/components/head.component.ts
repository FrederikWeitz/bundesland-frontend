import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bundeslaender-head',
  template: ` <h1>
    {{ label }}
  </h1>`,
  styleUrls: ['./head.scss'],
})
export default class HeadComponent {
  @Input()
  label = 'Bundesländer';
}
