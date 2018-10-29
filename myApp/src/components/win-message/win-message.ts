import { Component } from '@angular/core';

/**
 * Generated class for the WinMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'win-message',
  templateUrl: 'win-message.html'
})
export class WinMessageComponent {

  text: string;

  constructor() {
    console.log('Hello WinMessageComponent Component');
    this.text = 'Hello World';
  }

}
