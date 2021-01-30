import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NgForm} from '@angular/forms';
import {IProfile} from './profile.service';

export interface IPublication {
  id: number;
  content: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  Profile: IProfile;
}

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  getAllPublications(): Promise<IPublication[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.urlApi + '/api/publication/')
        .subscribe((response: IPublication[]) => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

  addPublication(form: NgForm, image?: File): Promise<{message: string}> {
    const formData = new FormData();
    formData.append('content', form.value.content);
    if (image) {
      formData.append('image', image);
    }
    return new Promise((resolve, reject) => {
      this.http.post(environment.urlApi + '/api/publication/', formData)
        .subscribe((response: {message: string}) => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

}
