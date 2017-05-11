import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the AppUser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUser {

  constructor(public http: Http) {
    console.log('Hello AppUser Provider');
  }
  baseUrl: string = "https://sp-17-jenny-jbrownssf.c9users.io:8080/api"
  userPath: string = "/AppUsers"
  loginPath: string = "/login"
  logoutPath: string = "/logout"  
  
  //http POST request to register a new user
  register(newUserData) {
   return this.http.post(
    this.baseUrl + this.userPath,
    newUserData
   );
  }
  
  //http POST request to login a new user
  login(userData) {
   return this.http.post(
    this.baseUrl + this.userPath + this.loginPath,
    userData
   );
  }
  
  //http POST request to logout the user 
  logout(token) {
   return this.http.post(
    this.baseUrl + this.userPath + this.logoutPath,
    + '?access_token=' +  token, {}  //we need to pass in an empty object
    //because the POST method is expecting two parameters 
   );
  }
  

}
