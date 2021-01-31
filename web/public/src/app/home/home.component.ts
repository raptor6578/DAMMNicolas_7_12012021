import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {IPublication, PublicationService} from '../services/publication.service';
import {NgForm} from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  connected: boolean;
  image: File;
  publications: IPublication[];

  constructor(private auth: AuthService, private publication: PublicationService) { }

  ngOnInit(): void {
    this.auth.connected$.subscribe(value => this.connected = value);
    this.publication.getAllPublications().then(publications => this.publications = publications);
  }

  onSubmitPublication(form: NgForm): void {
    this.publication.addPublication(form, this.image)
      .then(message => {
        console.log(message);
        this.publication.getAllPublications().then(publications => this.publications = publications);
      });
  }

  onDeletePublication(id: number): void {
    this.publication.deletePublication(id)
      .then(() => this.publication.getAllPublications().then(publications => this.publications = publications));
  }

  onFileAdded(event: Event): void {
    this.image = (event.target as HTMLInputElement).files[0];
  }

  getUrlPicture(picture: string): string {
    return environment.urlApi + '/images/upload/' + picture;
  }

}

