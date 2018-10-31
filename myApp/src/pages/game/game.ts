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
  private clickeadas: number[]=[0,1,2,3,4,5,6,7];
  private correctas: number[]=[];

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
    this.actualizarArreglo();
    var contador: number = setInterval(() => { 
      this.startCountdown(20);
      this.clickeadas.length = 0;
      clearInterval(contador);

    }, 500);
    
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
      if(this.secondsUntilDead === 0 ){
        clearInterval(this.interval);
        this.goToLosePage();
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

  clickCard(CardPos: number){
    var arrayPos = this.isClicked(CardPos);
    if(arrayPos >= 0){
      this.clickeadas.splice(arrayPos, 1);
    } else {
      if(this.clickeadas.length < 2){
        this.clickeadas.push(CardPos);
        if(this.clickeadas.length === 2){
          if(this.compareCards() === true){
            this.correctas.push(... this.clickeadas);
            this.correctasCompletas()
          } else {
            this.cantVidas--;
            this.actualizarArreglo();
              if(this.cantVidas === 0){
                setTimeout(() => {
                  this.vidas.length = 0;
                  this.goToLosePage();
                }, 2000);
               }
            }
          setTimeout(() => { 
            this.clickeadas.length = 0;
          }, 1000);
        }
      } 
    }
  }

  correctasCompletas(){
    if(this.correctas.length === 8){
      clearInterval(this.interval);
      setTimeout(() => {
        this.vidas.length = 0;
        this.goToWinPage();
      }, 2000);
      
    }
  }

  compareCards(){
    var pos1: number = this.clickeadas[0];
    var pos2: number = this.clickeadas[1];
    var card1: string = this.cartas[pos1];
    var card2: string = this.cartas[pos2];
    return card1 === card2;
  }

  isClicked(posicion: number){
    let pos = this.clickeadas.findIndex((value, index, obj )=>{
      return value === posicion;
    });
    return (pos);
  }

  sonCorrectas(posicion: number){
    let pos = this.correctas.findIndex((value, index, obj )=>{
      return value === posicion;
    });
    return (pos);
  }
}
