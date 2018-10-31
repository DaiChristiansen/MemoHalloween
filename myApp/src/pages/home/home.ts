import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  startGame() {
    //validar que los datos ingresados esten correctos
    //guardar los datos en un modelo de datos

    //Si esta todo correcto, pasar a la siguiente pantalla.
    //this.navCtrl.push('page-game');
    this.navCtrl.push(GamePage);
    //console.log("inicio de juego");
  }

}
