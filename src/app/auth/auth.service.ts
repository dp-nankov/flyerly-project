import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{

  user : IUser | null = null;

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | null => val !== undefined));

  get isLoggedIn(){
    return this.user !== null;
  }

  subscription: Subscription

  constructor(private http: HttpClient) { 
     this.subscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }
  

  register(firstName: string, lastName: string, email: string, username: string, password: string) {
    return this.http.post<IUser>(`/api/register`, {firstName, lastName, email, username, password})
    .pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<any>(`/api/login`, {email, password})
    .pipe(tap(user => this.user$$.next(user)));
  }

  logout(){
    return this.http.post<void>('/api/logout', {}).pipe(tap(user => this.user$$.next(null)));
  }

  getProfile(){
    return this.http.get<IUser>('/api/users/profile')
    .pipe(tap(user => this.user$$.next(user)),
    catchError((err) => {
      this.user$$.next(null);
      return of (err);
    })
    );
  }

  getUser(userId: string | null){
    return this.http.get<IUser>('/api/users/profile/' + userId)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
