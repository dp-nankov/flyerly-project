import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAd } from '../shared/interfaces/ad';

const apiURL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private httpClient: HttpClient) { }

  loadAds(){
    return this.httpClient.get<IAd[]>(`${apiURL}/ads`);
  };

  create(title: string, description: string, price: string, imgUrl: string) {
    return this.httpClient.post<IAd[]>(`/api/ads`, {title, description, price, imgUrl})
  }
  getAdCustom(customId: string | null){
    return this.httpClient.get<IAd[]>(`${apiURL}/ads/custom/` + customId);
  };
  edit(title: string, description: string, price: string, imgUrl: string, adId: string) {
    return this.httpClient.put<IAd[]>(`/api/ads/edit/` + adId, {title, description, price, imgUrl})
  }
}
