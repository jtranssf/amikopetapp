import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//pages
import { Home } from '../home/home';
import { Register } from '../register/register';
import { Start } from '../start/start';

//providers
import { PetStats } from '../../providers/pet-stats';
import { AppUser } from '../../providers/app-user';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  
  user: any = {};
  pet: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser,
    public petStats: PetStats
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  
  goRegister(){
      this.navCtrl.push(Register);
  }
  
  login(form){
    if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    
    this.appUser.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);

      this.petStats.getStats(res.id, res.userId)
      .map(res => res.json())
      .subscribe(res => {
        this.pet = res;
        console.log("Our pet is " + this.pet);
        this.navCtrl.push(Home, {pet: this.pet});
      //catch errors if we can not call pet from provider  
      }, error => {
        alert("Could not retrieve pet, please create a new one");
        this.navCtrl.push(Start);
      });
    
    //catch errors if user cannot log in   
    }, error => {
        switch(error.status) {
        case 404:
          alert("Error 404: Page Not Found");
          break;
        case 500:
          alert("Error 500: Server is currently offline, please try again later");
          break;
        case null:
          alert("User is offline");
          break;
        default:
          alert("Error. Did you enter the correct email and password?");
          break;
      }
      
    }); 
    
    
  }

}
