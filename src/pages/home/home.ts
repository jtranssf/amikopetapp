import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Feed } from '../feed/feed';
import { Play } from '../play/play';
import { Start } from '../start/start';

import { PetStats } from '../../providers/pet-stats';
import { AppUser } from '../../providers/app-user';



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
  token: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public statsProv: PetStats,
    public appUser: AppUser
    ) {
      //log to check that the pet object was passed from the start page
      console.log(this.navParams.get("pet"));
      this.pet = this.navParams.get("pet");

      if(!this.pet.name){
        //if pet wasn't passed in from the login page, retrieve it
        this.pet = statsProv.getStats(window.localStorage.getItem("token"));
        //if user never initialized a pet, redirect them to the start page to make one
        if(!this.pet){
        this.navCtrl.push(Start);
        }
      }
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
   
    console.log(this.pet);
  }
  
  goFeed(){
    this.navCtrl.push(Feed, { pet: this.pet });
  }
  
  goPlay(){
    this.navCtrl.push(Play, { pet: this.pet });
  }
  
  logout(){
    this.appUser.logout(window.localStorage.getItem("token"));
    this.navCtrl.setRoot(Login);
  }

}
