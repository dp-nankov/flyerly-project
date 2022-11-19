import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IAd } from '../interfaces/ad';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

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
