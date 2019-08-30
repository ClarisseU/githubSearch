import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profile: any;
 repos: any;
  constructor(private proservice:ProfileService) { 
    this.proservice.getInfoProfile().subscribe(profile=>{
     console.log(profile);
     this.profile = profile;
    });
    this.proservice.getRepo().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    })
  }
  ngOnInit() {
  }

}