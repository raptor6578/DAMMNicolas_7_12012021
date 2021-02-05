import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {IComment, IPublication, IVote, PublicationService} from '../services/publication.service';
import {NgForm} from '@angular/forms';
import { environment } from '../../environments/environment';
import {SocketIoService} from '../services/socket-io.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  connected: boolean;
  image: File;
  publications: IPublication[];

  constructor(private auth: AuthService,
              private publication: PublicationService,
              private socket: SocketIoService) {}

  ngOnInit(): void {
    this.auth.connected$.subscribe(value => this.connected = value);
    this.publication.getAllPublications().then(publications => this.publications = publications);
    this.initializeSocketIO();
  }

  private initializeSocketIO(): void {

    this.socket.on('newPublication').subscribe((data: IPublication) => this.publications.unshift(data));

    this.socket.on('deletePublication').subscribe((data: {id: number}) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.id));
      this.publications.splice(indexPublication, 1);
    });

    this.socket.on('newComment').subscribe((data: IComment) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
      this.publications[indexPublication].Comment.push(data);
    });

    this.socket.on('addVote').subscribe((data: IVote) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
      this.publications[indexPublication].Vote.push(data);
    });

    this.socket.on('deleteVote').subscribe((data: IVote) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
      if (indexPublication !== -1) {
        const indexVote = this.publications[indexPublication].Vote.findIndex(vote => vote.UserId === Number(data.UserId));
        if (indexVote !== -1) {
          this.publications[indexPublication].Vote.splice(indexVote, 1);
        }
      }
    });

  }

  onSubmitPublication(form: NgForm): void {
    this.publication.addPublication(form, this.image)
      .then();
  }

  onDeletePublication(id: number): void {
    this.publication.deletePublication(id).then();
  }

  onFileAdded(event: Event): void {
    this.image = (event.target as HTMLInputElement).files[0];
  }

  getUrlPicture(picture: string): string {
    return environment.urlApi + '/images/upload/' + picture;
  }

  onSubmitComment(form: NgForm): void {
    this.publication.addComment(form.value.publicationId, form.value.comment).then();
  }

  like(id: number): void {
    this.publication.addVote(id).then();
  }

  dislike(id: number): void {
    this.publication.deleteVote(id).then();
  }

  countVote(votes: IVote[]): number {
    return votes.length;
  }

  existingVote(votes: IVote[]): boolean {
    const indexVote = votes.findIndex(vote => vote.UserId === this.auth.getId());
    return indexVote !== -1;
  }

}

