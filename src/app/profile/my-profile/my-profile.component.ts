import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  user = this.authService.user;
  firstName = this.user?.firstName;
  lastName = this.user?.lastName;
  email = this.user?.email;
  username = this.user?.username;
  createdAt = this.user?.created_at.split("T")[0];
  adsCount = this.user?.ads.length;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.user);
    
  }

}
