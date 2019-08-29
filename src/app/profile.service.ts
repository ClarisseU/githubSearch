import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;

  constructor(private http:HttpClient) {
    console.log("service is ready");
   }
}
