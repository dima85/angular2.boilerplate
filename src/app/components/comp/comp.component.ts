import { Component } from '@angular/core';

@Component({
  selector: 'of-comp',
  templateUrl: './comp.component.html',
  styleUrls: [ './comp.component.scss' ],
})
export class CompComponent {
  text: string = 'hello world!';
}
