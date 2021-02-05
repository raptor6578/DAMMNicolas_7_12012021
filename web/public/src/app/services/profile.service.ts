import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NgForm} from '@angular/forms';

export interface IProfile {
  UserId: number;
  lastName: string;
  firstName: string;
  birthDate: Date;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) {}

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

  putProfile(form: NgForm, image?: File): Promise<{message: string}> {
    const formData = new FormData();
    for (const key of Object.keys(form.value)) {
      if (form.value[key]) {
        formData.append(key, form.value[key]);
      }
    }
    if (image) {
      formData.append('image', image);
    }
    return new Promise((resolve, reject) => {
      this.http.put(environment.urlApi + '/api/profile', formData)
        .subscribe((response: {message: string}) => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

}
