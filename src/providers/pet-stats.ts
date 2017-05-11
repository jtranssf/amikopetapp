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
  
  constructor(public http: Http) {
    console.log('Hello PetStats Provider');
  }
  
  baseUrl: string = "https://sp-17-jenny-jbrownssf.c9users.io:8080/api"
  petPath: string = "/petStats"
  
  //http POST request to create a new pet
  pushStats(token, newPetData) {
   console.log("Gave birth to " + " " + newPetData + "! Its token is "+ token);
   return this.http.post(
    this.baseUrl + this.petPath + "?access_token=" +  token,
    newPetData 
   );
  }
  
  //http GET request to get the pet associated with the id passed in
  getStats(token, id) {
   console.log("Retreiving pet with id: " + id + " and token: " +  token);
   return this.http.get(
    this.baseUrl + this.petPath + "/" + id + "?access_token=" +  token
   );
  }
  
  //http PUT request to update new happiness and energy levels
  updateStats(token, id, newHappiness, newEnergy){
    console.log("New happiness: " + newHappiness + ", New energy: " + newEnergy);
    return this.http.put(
    this.baseUrl + this.petPath + "/" + id + "?access_token=" +  token,
    {"happiness": newHappiness, "energy": newEnergy}
   );
  }


}
