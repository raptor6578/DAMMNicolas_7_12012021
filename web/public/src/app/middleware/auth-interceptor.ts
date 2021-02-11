import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {NEVER} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  connected: boolean;

  constructor(private auth: AuthService) {
    this.auth.connected$.subscribe(connected => this.connected = connected);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const authToken = this.auth.getToken();
    if (this.connected) {
      if (this.auth.tokenNotExpired()) {
        const newRequest = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(newRequest);
      } else {
        this.auth.logout();
        return NEVER;
      }
    }
    return next.handle(req);
  }

}
