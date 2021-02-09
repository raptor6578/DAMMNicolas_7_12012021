import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {NgForm} from '@angular/forms';
import {IProfile} from './profile.service';
import {IUser} from './auth.service';

export interface IPublication {
  id: number;
  content: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
  UserId: number;
  Profile: IProfile;
  Comment: IComment[];
  Vote: IVote[];
}

export interface IComment {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  PublicationId: number;
  UserId: number;
  User: IUser;
}

export interface IVote {
  id: number;
  UserId: number;
  PublicationId: number;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) {}

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

  getPublications(offset: number, limit: number): Promise<IPublication[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.urlApi + `/api/publication/${offset}/${limit}`)
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
        .subscribe((response: { message: string }) => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

  deletePublication(id: number): Promise<null> {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.urlApi + '/api/publication/' + id)
        .subscribe((response: null) => {
          resolve(response);
      }, error => {
          reject(error);
      });
    });
  }

  addComment(id: number, content: string): Promise<{message: string}> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.urlApi + '/api/publication/add-comment', {id, content})
        .subscribe((response: { message: string }) => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

  addVote(id: number): Promise<{message: string}> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.urlApi + '/api/publication/add-vote', {id})
        .subscribe((response: { message: string }) => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

  deleteVote(id: number): Promise<null> {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.urlApi + '/api/publication/delete-vote/' + id)
        .subscribe((response: null) => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

}
