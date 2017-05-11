import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Home } from '../home/home';
import { PetStats } from '../../providers/pet-stats';

/**
 * Generated class for the Start page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class Start {
  
  pet: any = {};
  public orange: boolean = false;
  public blue: boolean = false;
  token: any  ;


  constructor(public navCtrl: NavController, public navParams: NavParams, public petStats: PetStats) {
    this.token = window.localStorage.getItem("token");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Start');
  }
  
  petClick(color){
    this.pet.type = color;
    console.log(this.pet.type);
  }
  
  startForm(form){
    if(form.invalid) {
     return alert("Please enter a name for your new friend.");
    }
    if(this.orange==false && this.blue==false){ 
      return alert("Please choose one of the eggs");
    }
    if(this.pet.name!=null)
    console.log(this.pet.name);
    this.pet.feeling = "Happy";
    this.pet.energy = 100;
    this.pet.happiness = 100;
    this.pet.id=window.localStorage.getItem("userId");
    console.log("before stat", this.pet, this.token);
    
    this.petStats.pushStats(this.token,this.pet)
    .map(res => res.json())
    .subscribe(res => {
      console.log("res",res);
      this.navCtrl.setRoot(Home, { pet: this.pet });
    }, error => {
        switch(error.status) {
        case 404:
          alert("Error 404: Page Not Found");
          break;
        case 422:
          alert("Error 422");
          break;
        case 500:
          alert("Error 500: Server is currently offline, please try again later");
          break;
        case null:
          alert("User is offline");
          break;
        default:
          alert("Error, please try again later");
          break;
      }
      
    });  

  }

}
