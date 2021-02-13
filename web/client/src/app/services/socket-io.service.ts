import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  socket = io(environment.urlApi);

  constructor() {}

  on(event): Subject<{}> {
    const data$ = new Subject();
    this.socket.on(event, data => {
      data$.next(data);
    });
    return data$;
  }

}
