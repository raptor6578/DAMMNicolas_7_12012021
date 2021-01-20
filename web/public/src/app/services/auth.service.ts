import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected$ = new BehaviorSubject<boolean>(false);
  token: string;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.connected$.next(true);
    }
  }

  signup(email: string, password: string): Promise<{message: string}> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.urlApi + '/api/auth/signup', {email, password}).subscribe(
        (response: {message: string}) => {
          resolve(response);
        },
        (response) => {
          reject(response.error);
        }
      );
    });
  }

  login(email: string, password: string): Promise<{token: string}> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.urlApi + '/api/auth/login', {email, password}).subscribe(
        (response: {token: string}) => {
          this.connected$.next(true);
          this.token = response.token;
          localStorage.setItem('token', this.token);
          resolve(response);
        },
        (response) => {
          reject(response.error);
        }
      );
    });
  }

  logout(): void {
    delete this.token;
    localStorage.removeItem('token');
    this.connected$.next(false);
  }

}
