import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface IProfile {
  userId: number;
  lastName: string;
  firstName: string;
  birthDate?: Date;
  picture?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(): Promise<IProfile> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.urlApi + '/api/profile')
        .subscribe((response: IProfile) => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

}
