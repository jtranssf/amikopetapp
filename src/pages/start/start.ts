import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Home } from '../home/home';

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
  petColor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    this.navCtrl.setRoot(Home, { pet: this.pet });
  }

}
