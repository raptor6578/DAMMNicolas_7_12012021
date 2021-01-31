import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

export interface IAuth {
  token: string;
  id: number;
  admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected$ = new BehaviorSubject<boolean>(false);
  token: string;
  id: number;
  admin: boolean;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('auth')) {
      const auth = JSON.parse(localStorage.getItem('auth'));
      this.token = auth.token;
      this.id = auth.id;
      this.admin = auth.admin;
      this.connected$.next(true);
    }
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
          resolve(response);
        },
        (response) => {
          reject(response.error);
        }
      );
    });
  }

  login(email: string, password: string): Promise<IAuth> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.urlApi + '/api/auth/login', {email, password}).subscribe(
        (response: IAuth) => {
          this.connected$.next(true);
          this.token = response.token;
          this.id = response.id;
          this.admin = response.admin;
          localStorage.setItem('auth', JSON.stringify(response));
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
    localStorage.removeItem('auth');
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
