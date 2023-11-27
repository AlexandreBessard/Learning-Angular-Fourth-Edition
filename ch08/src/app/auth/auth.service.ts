import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = '';
  get isLoggedIn() {
    console.log(this.token);
    // Returns true if token is NOT empty
    return this.token !== '';
  }

  constructor(private http: HttpClient) { }

  login(): Observable<string> {
    // Returns a token
    return this.http.post<string>('https://fakestoreapi.com/auth/login', {
      username: 'david_r',
      password: '3478*#54'
    }).pipe(
      // The tap artifact is an RxJS operator we use when we want to handle the emitted data from an observable without modifying it.
      tap(token => this.token = token));
  }

  logout() {
    this.token = '';
  }
}
