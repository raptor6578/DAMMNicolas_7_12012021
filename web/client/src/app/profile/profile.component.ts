import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {environment} from '../../environments/environment';
import {ProfileService} from '../services/profile.service';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  env = environment;
  profile;
  message: string;
  image: File;

  constructor(private profileService: ProfileService, public dialog: MatDialog) {
    this.profile = {};
  }

  ngOnInit(): void {
    this.profileService.getProfile()
      .then(profile => {
        this.profile = profile;
        if (this.profile.picture) {
          this.profile.picture = `${this.env.urlApi}/images/upload/${this.profile.picture}`;
        } else {
          this.profile.picture = `${this.env.urlApi}/images/default-profile.png`;
        }
      });
  }

  onSubmit(form: NgForm): void {
    this.profileService.putProfile(form, this.image)
      .then(response => this.message = response.message)
      .catch(error => this.message = error.message);
  }

  openDialog(): void {
    this.dialog.open(ProfileRemoveAccountConfirmDialogComponent);
  }

  onFileAdded(event: Event): void {
    this.image = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.profile.picture = reader.result;
    });
    reader.readAsDataURL(this.image);
  }

}

@Component({
  selector: 'app-profile-remove-account-confirm-dialog',
  templateUrl: 'remove-account-confirm-dialog.html',
  styleUrls: ['./remove-account-confirm-dialog.sass']
})
export class ProfileRemoveAccountConfirmDialogComponent {

  constructor(private auth: AuthService) {}

  removeConfirmed(): void {
    this.auth.delete(this.auth.getId()).then();
  }

}
