import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the PetStats provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PetStats {
 
  baseUrl: string = "https://sp-17-jenny-jbrownssf.c9users.io:8080/api"
  path: string = "/petStats"
 
  
  constructor(public http: Http) {
    console.log('Hello PetStats Provider');
  }
  
  getStats(token) {
   return this.http.get(
    this.baseUrl + this.path,
    + '?access_token=' +  token
   );
  }
  
  pushStats(newPetData) {
   return this.http.post(
    this.baseUrl + this.path,
    newPetData
   );
  }


}
