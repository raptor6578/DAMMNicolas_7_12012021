import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  connected: boolean;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  loginMobile: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.loginMobile = false;
    this.auth.connected$.subscribe(value => this.connected = value);
  }

  onSubmit(form: NgForm): void {
    this.auth.login(form.value.email, form.value.password).then(() => this.loginMobile = false);
  }

  logout(): void {
    this.auth.logout();
  }

}
