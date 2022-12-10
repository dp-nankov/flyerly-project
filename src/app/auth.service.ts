import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(){
    return this.httpClient.get(`${apiURL}/ads`);
  };
}
