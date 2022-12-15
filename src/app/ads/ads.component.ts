import { Component, OnInit } from '@angular/core';
import { AdsService } from './ads.service';
import { IAd } from '../shared/interfaces/ad';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

    ads!:IAd[];


  constructor(private adsService:AdsService) { }

  ngOnInit(): void {
    this.adsService.loadAds().subscribe({
      next: (value) => {
        this.ads = value;
      }
    });    
  }

}
