import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-end-game',
  templateUrl: 'end-game.html',
})
export class EndGamePage {
  private isWinner: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isWinner = this.navParams.get('win');
  }
}