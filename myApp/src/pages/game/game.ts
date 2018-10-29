import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EndGamePage } from '../end-game/end-game';


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  goToWinPage() {
    this.navCtrl.push(EndGamePage, {win: true});
  }

  goToLosePage() {
    this.navCtrl.push(EndGamePage, {win: false});
  }

  goToLogin() {
    this.navCtrl.popToRoot();
  }
}
