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

  create(title: string, description: string, imgUrl: string) {
    return this.httpClient.post<IAd[]>(`/api/ads`, {title, description, imgUrl})
    
  }

}
