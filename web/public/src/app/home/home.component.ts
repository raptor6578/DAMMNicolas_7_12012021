import {Component, HostListener, OnInit} from '@angular/core';
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
  scrollEnd: boolean;
  limitPublications: number;
  offsetPublications: number;
  maxComments: number;
  maxCommentsRef: {};

  constructor(private auth: AuthService,
              private publication: PublicationService,
              private socket: SocketIoService) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight) * 100;
    if (scrollPercentage >= 95 && !this.scrollEnd) {
      this.scrollEnd = true;
      this.loadPublications();
    }
  }

  ngOnInit(): void {
    this.offsetPublications = 0;
    this.limitPublications = 2;
    this.publications = [];
    this.maxComments = 5;
    this.maxCommentsRef = {};
    this.auth.connected$.subscribe(value => this.connected = value);
    this.loadPublications();
    this.initializeSocketIO();
  }

  loadPublications(): void {
    this.publication.getPublications(this.offsetPublications, this.limitPublications)
      .then(publications => {
        if (publications.length >= 1) {
          for (const publication of publications) {
            this.publications.push(publication);
          }
          this.offsetPublications += this.limitPublications;
          this.scrollEnd = false;
        }
      });
  }

  private initializeSocketIO(): void {

    this.socket.on('newPublication').subscribe((data: IPublication) => {
      this.publications.unshift(data);
      this.offsetPublications++;
    });

    this.socket.on('deletePublication').subscribe((data: {id: number}) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.id));
      if (indexPublication !== -1) {
        this.publications.splice(indexPublication, 1);
        this.offsetPublications--;
      }
    });

    this.socket.on('newComment').subscribe((data: IComment) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
      this.publications[indexPublication].Comment.unshift(data);
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
    this.publication.addPublication(form, this.image).then();
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

  showMoreComment(index): void {
    if (this.maxCommentsRef[index]) {
      this.maxCommentsRef[index] += this.maxComments;
    } else {
      this.maxCommentsRef[index] = this.maxComments * 2;
    }
  }

  focusInputComment(id: number): void {
    document.getElementById('input-comment-' + id).focus();
  }

}

