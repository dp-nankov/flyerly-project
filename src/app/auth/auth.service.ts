import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : IUser | null = null;

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable();

  get isLoggedIn(){
    return this.user !== null;
  }

  constructor(private http: HttpClient) { }

  register(firstName: string, lastName: string, email: string, username: string, password: string) {
    return this.http.post<IUser>(`/api/register`, {firstName, lastName, email, username, password});
  }

  login(email: string, password: string) {
    return this.http.post<any>(`/api/login`, {email, password});
  }

  logout(){
    return this.http.post<void>('/api/logout', {});
  }

  getProfile(){
    return this.http.get<IUser>('/api/users/profile');
  }
}
