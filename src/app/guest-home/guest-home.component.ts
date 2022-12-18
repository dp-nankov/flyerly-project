import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AdsComponent } from '../ads/ads.component';
import { AdsService } from '../ads/ads.service';
import { IAd } from '../shared/interfaces/ad';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.scss']
})
export class GuestHomeComponent implements OnInit {

  form = this.fb.group({
    text: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private adsService: AdsService) { }
  ads!:IAd[];
  errorMsg!:string | undefined;

  ngOnInit(): void {
    this.adsService.loadAds()
    .pipe(
      catchError(error => {
          this.errorMsg = error.message;
          return of([]);
      })) 
    .subscribe({
      next: (value) => {
        this.ads = value.slice(-3).reverse();
      }
    });
  }

  formHandler(){
    this.adsService.textFromHome = this.form.value.text;
    this.adsService.isFromHome = true;
    this.router.navigate(["/ads"])
  }

}
