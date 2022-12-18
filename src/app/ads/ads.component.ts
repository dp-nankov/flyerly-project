import { Component, OnInit } from '@angular/core';
import { AdsService } from './ads.service';
import { IAd } from '../shared/interfaces/ad';
import { catchError, of } from 'rxjs';
import { LoaderService } from '../core/loader.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
    errorMsg!:string | undefined;
    loading = true;

    ads!:IAd[];
    filteredAds:IAd[] = [];
    filteredAdsP:IAd[] = [];
    searchTerm: string | null | undefined = '';
    noResult = false;
    searchPriceDown: string | null | undefined = '';
    searchPriceUp: string | null | undefined = '';


  constructor(private adsService:AdsService, public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.adsService.loadAds()
    .pipe(
      catchError(error => {
          this.errorMsg = error.message;
          return of([]);
      })) 
    .subscribe({
      next: (value) => {
        this.ads = value;
        this.filteredAds = this.ads;
        this.filteredAdsP = this.filteredAds;
        this.loading = false;
      }
    });
    
    this.searchTerm = this.adsService.setSearchBar();
  }

  search(value: string | null | undefined): void {
    this.filteredAds = this.ads.filter((val) =>
      val.title.toLowerCase().includes(value!.toLocaleLowerCase())
    );
    this.filteredAdsP = this.filteredAds;    
  }

  searchPrice(): void {
      let max = Number.MAX_SAFE_INTEGER;
      let min = 0;
      console.log(this.searchPriceUp !== null && this.searchPriceUp !== "");
      if(this.searchPriceUp !== null && this.searchPriceUp !== ""){
        max = Number(this.searchPriceUp)
      }
      if(this.searchPriceDown !== null && this.searchPriceDown !== ""){
        min = Number(this.searchPriceDown)
      }
      this.filteredAdsP = this.filteredAds.filter((v) => Number(v.price) >= min && Number(v.price) <= max);
  }

  
}
