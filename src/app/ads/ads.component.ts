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
    filteredAds:IAd[] = [];
    searchTerm = '';
    noResult = false;

  constructor(private adsService:AdsService) { }

  ngOnInit(): void {
    this.adsService.loadAds().subscribe({
      next: (value) => {
        this.ads = value;
        this.filteredAds = this.ads;
      }
    });    
  }

  search(value: string): void {
    this.filteredAds = this.ads.filter((val) =>
      val.title.toLowerCase().includes(value.toLocaleLowerCase())
    );    
  }
}
