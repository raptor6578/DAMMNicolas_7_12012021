import { Component, OnInit } from '@angular/core';
import {faEnvelope, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {AuthService, IUser} from '../services/auth.service';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faEnvelope = faEnvelope;
  users: IUser[];

  constructor(private auth: AuthService, private profile: ProfileService) { }

  ngOnInit(): void {
    this.auth.getAllUsers().then(users => this.users = users);
  }

  deleteUser(id: number): void {
    this.auth.delete(id).then(() => {
      const indexUser = this.users.findIndex(user => user.id === id);
      this.users.splice(indexUser, 1);
    });
  }

  setAdmin(id: number, admin: number): void {
    this.auth.setAdmin(id, admin).then();
  }

}
