import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  // private access_token = environment.apiKey;
  apiKey: string ="environment.apiKey";
  apiUrl: string = "https://api.github.com/users/";

  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username="ClarisseU";
    // this.access_token = environment.apiKey;
    
   }
  
  getInfoProfile(){
     return this.http.get(this.apiUrl + this.username+"?access_token=" + environment.apiKey);
   }
   getRepo(){
    return this.http.get(this.apiUrl +this.username+"/repos?access_token=" + environment.apiKey);
   }
   updateProfile(username:string){
    return this.username = username;
   }
   
}
