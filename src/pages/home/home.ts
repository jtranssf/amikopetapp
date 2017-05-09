import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Feed } from '../feed/feed';
import { Play } from '../play/play';

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  
  pet: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      //log to check that the pet object was passed from the start page
      console.log(this.navParams.get("pet"));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
    this.pet = this.navParams.get("pet");
    this.pet.feeling = "Happy";
    this.pet.happiness = 100;
    this.pet.energy = 100;

    console.log(this.pet);
  }
  
  goFeed(){
    this.navCtrl.push(Feed, { pet: this.pet });
  }
  
  goPlay(){
    this.navCtrl.push(Play, { pet: this.pet });
  }
  
  logout(){
    this.navCtrl.setRoot(Login);
  }

}
