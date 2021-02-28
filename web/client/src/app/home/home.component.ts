import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {IComment, IPublication, IVote, PublicationService} from '../services/publication.service';
import {NgForm} from '@angular/forms';
import {SocketIoService} from '../services/socket-io.service';
import {ProfileService} from '../services/profile.service';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {

  connected: boolean;
  image: File;
  publications: IPublication[];
  scrollEnd: boolean;
  limitPublications: number;
  offsetPublications: number;
  limitComments: number;
  offsetComments: {};
  admin: boolean;
  faTrashAlt = faTrashAlt;
  newPublication$: Subscription;
  deletePublication$: Subscription;
  deleteComment$: Subscription;
  newComment$: Subscription;
  addVote$: Subscription;
  deleteVote$: Subscription;

  constructor(private auth: AuthService,
              private publication: PublicationService,
              private profile: ProfileService,
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
    this.publications = [];
    this.limitPublications = 2;
    this.offsetPublications = 0;
    this.limitComments = 5;
    this.offsetComments = {};
    this.auth.connected$.subscribe(connected => this.connected = connected);
    this.auth.admin$.subscribe(admin => this.admin = admin);
    this.loadPublications();
    this.initializeSocketIO();
  }

  ngOnDestroy(): void {
    this.destroySocketIO();
  }

  private initializeSocketIO(): void {
    this.newPublication$ = this.socket.on('newPublication').subscribe((data: IPublication) => {
      this.publications.unshift(data);
      this.offsetPublications++;
    });

    this.deletePublication$ = this.socket.on('deletePublication').subscribe((data: {id: number}) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.id));
      if (indexPublication !== -1) {
        this.publications.splice(indexPublication, 1);
        this.offsetPublications--;
      }
    });

    this.deleteComment$ = this.socket.on('deleteComment').subscribe((data: {idPublication: number, idComment: number}) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.idPublication));
      if (indexPublication !== -1) {
        const indexComment = this.publications[indexPublication].Comment.findIndex(comment => comment.id === Number(data.idComment));
        if (indexComment !== -1) {
          this.publications[indexPublication].Comment.splice(indexComment, 1);
          // const idPublication = this.publications[indexPublication].id;
          // this.offsetComments[idPublication]--;
        }
      }
    });

    this.newComment$ = this.socket.on('newComment').subscribe((data: IComment) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
      if (indexPublication !== -1) {
        this.publications[indexPublication].Comment.push(data);
        const publicationId = this.publications[indexPublication].id;
        if (this.offsetComments[publicationId] !== 0) {
          if (this.offsetComments[publicationId]) {
            this.offsetComments[publicationId]++;
          } else {
            this.offsetComments[publicationId] = 1;
          }
        }
      }
    });

    this.addVote$ = this.socket.on('addVote').subscribe((data: IVote) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
      this.publications[indexPublication].Vote.push(data);
    });

    this.deleteVote$ = this.socket.on('deleteVote').subscribe((data: IVote) => {
      const indexPublication = this.publications.findIndex(publication => publication.id === Number(data.PublicationId));
      if (indexPublication !== -1) {
        const indexVote = this.publications[indexPublication].Vote.findIndex(vote => vote.UserId === Number(data.UserId));
        if (indexVote !== -1) {
          this.publications[indexPublication].Vote.splice(indexVote, 1);
        }
      }
    });

  }

  destroySocketIO(): void {
    this.newPublication$.unsubscribe();
    this.deletePublication$.unsubscribe();
    this.deleteComment$.unsubscribe();
    this.newComment$.unsubscribe();
    this.addVote$.unsubscribe();
    this.deleteVote$.unsubscribe();
  }

  loadPublications(): void {
    this.publication.getPublications(this.offsetPublications, this.limitPublications)
      .then(publications => {
        if (publications.length >= 1) {
          for (const publication of publications) {
            this.publications.push(publication);
            if (publication.Comment.length < this.limitComments) {
              this.offsetComments[publication.id] = 0;
            }
          }
          this.offsetPublications += this.limitPublications;
          this.scrollEnd = false;
        }
      });
  }

  loadComments(id: number): void {
    if (!this.offsetComments[id]) {
      this.offsetComments[id] = this.limitComments;
    }
    this.publication.getComment(id, this.offsetComments[id], this.limitComments)
      .then((comments: IComment[]) => {
        this.offsetComments[id] += this.limitComments;
        if (comments.length > 0) {
          for (const comment of comments) {
            const indexPublication = this.publications.findIndex(publication => publication.id === id);
            this.publications[indexPublication].Comment.unshift(comment);
            if (comments.length < this.limitComments) {
              this.offsetComments[id] = 0;
            }
          }
        } else {
          this.offsetComments[id] = 0;
        }
      });
  }

  onSubmitPublication(form: NgForm): void {
    this.publication.addPublication(form, this.image).then();
  }

  onDeletePublication(id: number): void {
    this.publication.deletePublication(id).then();
  }

  onDeleteComment(idPublication: number, idComment: number): void {
    this.publication.deleteComment(idPublication, idComment).then();
  }

  onFileAdded(event: Event): void {
    this.image = (event.target as HTMLInputElement).files[0];
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

  focusInputComment(id: number): void {
    document.getElementById('input-comment-' + id).focus();
  }

}

