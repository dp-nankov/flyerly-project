import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAd } from './interfaces/ad';

const apiURL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadAds(){
    return this.httpClient.get<IAd[]>(`${apiURL}/ads`);
  };

}
