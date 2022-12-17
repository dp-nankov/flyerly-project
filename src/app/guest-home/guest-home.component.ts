import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdsComponent } from '../ads/ads.component';
import { AdsService } from '../ads/ads.service';

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

  ngOnInit(): void {
  }

  formHandler(){
    this.adsService.textFromHome = this.form.value.text;
    this.adsService.isFromHome = true;
    this.router.navigate(["/ads"])
  }

}
