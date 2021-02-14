import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {IProfile} from './profile.service';
import {Base64} from 'js-base64';

export interface IUser {
  id: number;
  email: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
  Profile?: IProfile;
}

export interface ITokenData extends IUser {
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected$ = new BehaviorSubject<boolean>(false);
  token: string;
  id: number;
  admin: boolean;
  email: string;
  tokenIat: number;
  tokenExp: number;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      this.token = token;
      this.initializeAuth(token);
    }
  }

  private initializeAuth(token: string): void {
    const splitToken = token.split('.');
    const tokenDecode = Base64.decode(splitToken[1]);
    const tokenData: ITokenData = JSON.parse(tokenDecode);
    this.id = tokenData.id;
    this.admin = tokenData.admin;
    this.email = tokenData.email;
    this.tokenIat = tokenData.iat;
    this.tokenExp = tokenData.exp;
    this.connected$.next(true);
  }

  signup(email: string, password: string, lastName: string, firstName: string): Promise<{message: string}> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.urlApi + '/api/auth/signup', {
        email,
        password,
        Profile: {
          lastName,
          firstName
        }
      }).subscribe(
        (response: {message: string}) => {
          this.login(email, password);
          this.router.navigate(['/']);
          resolve(response);
        },
        (response) => {
          reject(response.error);
        }
      );
    });
  }

  tokenNotExpired(): boolean {
    if (this.tokenExp) {
      const dateNow = Math.floor(Date.now() / 1000);
      return this.tokenExp > dateNow;
    }
    return false;
  }

  login(email: string, password: string): Promise<{token: string}> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.urlApi + '/api/auth/login', {email, password}).subscribe(
        (response: {token: string}) => {
          this.token = response.token;
          this.initializeAuth(response.token);
          localStorage.setItem('token', response.token);
          resolve(response);
        },
        (response) => {
          reject(response.error);
        }
      );
    });
  }

  delete(id: number): Promise<null> {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.urlApi + '/api/auth/delete/' + id).subscribe(
        (response: null) => {
          if (id === this.id) {
            this.logout();
          }
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
    delete this.id;
    delete this.admin;
    localStorage.removeItem('token');
    this.connected$.next(false);
    this.router.navigate(['/']);
  }

  getToken(): string {
    return this.token;
  }

  getId(): number {
    return this.id;
  }

  getAdmin(): boolean {
    return this.admin;
  }

}
