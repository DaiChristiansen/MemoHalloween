import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-end-game',
  templateUrl: 'end-game.html',
})
export class EndGamePage {
  private isWinner: boolean;
  private imagen: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  goToLogin() {
    this.navCtrl.popToRoot();
  }

  ionViewDidEnter() {
    this.isWinner = this.navParams.get('win');
    if (this.isWinner===true){
      this.imagen = "assets/imgs/Ganaste.png";
    } else {
      this.imagen = "assets/imgs/Perdiste.png";
    }
  }
}