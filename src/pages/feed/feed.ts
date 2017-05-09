import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Home } from '../home/home';

/**
 * Generated class for the Feed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class Feed {
  
  foodItems: any = [];
  pet: any = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.foodItems = [
      {
            "name": "Strawberry",
            "id": 0,
            "happiness": 15,
            "energy": 17
      },
      {
            "name": "Peach",
            "id": 1,
            "happiness": 20,
            "energy": 27
      },
      {
            "name": "Kiwi",
            "id": 2,
            "happiness": 12,
            "energy": 30
      }
    ];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Feed');
    this.pet = this.navParams.get("pet");
    console.log(this.pet);   
  }
  
  goHome(){
    this.navCtrl.push(Home);
  }


}
