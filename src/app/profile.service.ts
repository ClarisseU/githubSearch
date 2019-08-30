import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private access_token = environment.apiKey;

  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username="ClarisseU";
    this.access_token = 'af44cfda8e93f3935e2b4122c17d093072a467d3';
    
   }
  
  getInfoProfile(){
     return this.http.get("https://api.github.com/users/" +this.username+"?access_token=" +this.access_token);
   }
   getRepo(){
    return this.http.get("https://api.github.com/users/" +this.username+"/repos?access_token=" +this.access_token);
   }
   updateProfile(username:string){
 return this.username = username;
   }
   
}
