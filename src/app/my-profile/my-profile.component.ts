import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { IAd } from 'src/app/shared/interfaces/ad';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  errorMsg!:string | undefined;

  myAds!:IAd[];
  user = this.authService.user;
  firstName = this.user?.firstName;
  lastName = this.user?.lastName;
  email = this.user?.email;
  username = this.user?.username;
  createdAt = this.user?.created_at.split("T")[0];
  adsCount = this.user?.ads.length;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getMyAds()
    .pipe(
      catchError(error => {
          this.errorMsg = error.message;
          return of([]);
      }))
      .subscribe({
      next: (value) => {
        this.myAds = value;
        console.log(this.myAds);
      }
    });    
  }

}
