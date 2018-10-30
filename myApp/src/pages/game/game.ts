import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EndGamePage } from '../end-game/end-game';


@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  private secondsUntilDead: number;
  private interval;
  private cantVidas: number;
  private vidas: number[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //contador=50
  }

  ionViewDidLoad() {
    }

  ionViewWillEnter() {
    this.cantVidas = 3;
  }

  ionViewDidEnter() {
    this.startCountdown(10);
    this.actualizarArreglo();
  }
  actualizarArreglo(){
    this.vidas.length = 0;
    for(let i=0; i<this.cantVidas; i++){
      this.vidas.push(i);
    }
  }

  ionViewWillLeave() {
    clearInterval(this.interval);
  }

  goToWinPage() {
    this.navCtrl.push(EndGamePage, {win: true});
  }

  goToLosePage() {
    this.navCtrl.push(EndGamePage, {win: false});
  }


  private startCountdown(seconds) {
    this.secondsUntilDead = seconds;

    this.interval = setInterval(() => {
      this.secondsUntilDead--;

      if(this.secondsUntilDead === 8 || this.secondsUntilDead === 6 || this.secondsUntilDead === 4){
        //resta una vida
        if(this.cantVidas === 1){
          clearInterval(this.interval);
          this.vidas.length = 0;
          this.goToLosePage();
        }else{
        this.cantVidas--;
        //this.vidas.pop();
        this.actualizarArreglo();
        }
      }

      if(this.secondsUntilDead === 0 ){
        clearInterval(this.interval);

        //this.goToLosePage();
      };
    }, 1000);
  };



}
