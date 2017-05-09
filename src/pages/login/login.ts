import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUser } from '../../providers/app-user';
import { Home } from '../home/home';
import { Register } from '../register/register';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser
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
     this.navCtrl.push(Home);
     this.appUser.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.push(Home);
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
          alert("Error, please try again later");
          break;
      }
      
    }); 
    
    
  }

}