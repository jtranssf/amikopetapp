import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Home } from '../home/home';

import { PetStats } from '../../providers/pet-stats';

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
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public petStats: PetStats) {
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
            "name": "Apple",
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
  
  feed(fruit){
    if(fruit=="strawberry"){
      alert("You fed "+ this.pet.name + " a strawberry");
      console.log(this.foodItems[0]);
      this.pet.happiness += this.foodItems[0].happiness;
      this.pet.energy +=  this.foodItems[0].energy;
      this.navCtrl.push(Home, {pet: this.pet});
    }else 
     if(fruit=="peach"){
      alert("You fed "+ this.pet.name + " a peach");
      console.log(this.foodItems[1]);
      this.pet.happiness += this.foodItems[1].happiness;
      this.pet.energy +=  this.foodItems[1].energy;
      this.navCtrl.push(Home, {pet: this.pet});
      
    }else 
     if(fruit=="apple"){
      alert("You fed "+ this.pet.name + " an apple");
      console.log(this.foodItems[2]);
      this.pet.happiness += this.foodItems[2].happiness;
      this.pet.energy +=  this.foodItems[2].energy;
    }
    
    this.petStats.updateStats( window.localStorage.getItem('token'), window.localStorage.getItem('userId'), this.pet.happiness, this.pet.energy )
      .map(res => res.json())
      .subscribe(res => {
        this.pet = res;
        console.log("Updated pet is " + this.pet);
        this.navCtrl.push(Home, {pet: this.pet});
      //catch errors if we can not call pet from provider  
      }, error => {
        alert("Could not update stats, please try again");
      });
  }

}
