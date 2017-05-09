import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Home } from '../home/home';

/**
 * Generated class for the Play page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class Play {

  toyItems: any = [];
  pet: any = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toyItems = [
        {
            "name": "Plushie",
            "id": 0,
            "happiness": 6,
            "energy": 22
        },
        {
            "name": "Bouncy Ball",
            "id": 1,
            "happiness": 10,
            "energy": 17
        }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Play');
    this.pet = this.navParams.get("pet");
    console.log(this.pet);    
  }
  
  goHome(){
    this.navCtrl.push(Home);
  }
  
  play(toyId){
    console.log(this.toyItems[toyId].name);
    this.pet.happiness += this.toyItems[toyId].happiness;
    this.pet.energy += this.toyItems[toyId].energy;
  }

}
