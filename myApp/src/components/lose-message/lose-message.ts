import { Component } from '@angular/core';

/**
 * Generated class for the LoseMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lose-message',
  templateUrl: 'lose-message.html'
})
export class LoseMessageComponent {

  text: string;

  constructor() {
    console.log('Hello LoseMessageComponent Component');
    this.text = 'Hello World';
  }

}
