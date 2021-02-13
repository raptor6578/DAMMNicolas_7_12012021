import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  connected: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.connected$.subscribe(value => this.connected = value);
  }

  onSubmit(form: NgForm): void {
    this.auth.login(form.value.email, form.value.password);
  }

  logout(): void {
    this.auth.logout();
  }

}
