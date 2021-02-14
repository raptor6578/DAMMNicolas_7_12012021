import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  errorMessage: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.value.password !== form.value.confirmPassword) {
      this.errorMessage = 'Les deux mots de passe ne sont pas identique';
      return;
    }
    this.auth.signup(form.value.email, form.value.password, form.value.lastName, form.value.firstName)
       .then()
       .catch(error => this.errorMessage = error.message);
  }

}
