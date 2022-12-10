import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IAd } from '../shared/interfaces/ad';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

    ads!:IAd[];


  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.loadAds().subscribe({
      next: (value) => {
        this.ads = value;
      }
    });    
  }

}
