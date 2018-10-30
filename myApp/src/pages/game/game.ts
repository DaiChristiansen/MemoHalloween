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
  private cantCartas: number;
  private cartas: string[]=[
    "CartaFrenteCalabazaGrande",
    "CartaFrenteCalabazaGrande",
    "CartaFrenteCalabera",
    "CartaFrenteCalabera",
    "CartaFrenteFantasma",
    "CartaFrenteFantasma",
    "CartaFrenteOlla",
    "CartaFrenteOlla",
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //contador=50
    this.cantCartas=8;
  }

  ionViewWillEnter() {
    this.cantVidas = 3;
    const aux = this.random(this.cartas);
    this.cartas = aux;
  }

  ionViewDidEnter() {
    //this.startCountdown(10);
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
      }
    }, 1000);
  }
  existePos(pos, arrPos){
    var esta: boolean;
    for (let i = 0; i < arrPos.length; i++) {
      if(arrPos[i] !== pos){
        esta=true;
      }   
    }
    return esta;
  }


  random(arr){
    let arr2 = new Array(arr.length - 1);
    for (let i=0;i<arr.length ;i++){
        let rand = Math.floor((Math.random() * arr.length) );
        while (arr2[rand] !== undefined ){
          rand = Math.floor((Math.random() * arr.length) );
      }
      arr2[rand] = arr[i];
    }
    return arr2;
  }
}
