import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUser } from '../../providers/app-user';
import { Start } from '../start/start';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  
  user: any = {}
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser 
) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  signupForm(form) { 
    if(form.invalid) {
     return alert("Please fill in all of the required fields.");
    }
    this.appUser.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.push(Start);
    }, error => {
        switch(error.status) {
        case 404:
          alert("Error 404: Page Not Found");
          break;
        case 422:
          alert("Error 422: This e-mail is already registered, please use another one");
          break;
        case 500:
          alert("Error 500: Server is currently offline, please try again later");
          break;
        case null:
          alert("User is offline");
          break;
        default:
          alert("Registration error, please try again later");
          break;
      }
      
    });  

    
  }
  
  
}
