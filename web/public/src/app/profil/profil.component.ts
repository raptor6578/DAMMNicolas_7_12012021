import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {environment} from '../../environments/environment';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {

  env = environment;
  profile;
  message: string;
  image: File;

  constructor(private profileService: ProfileService) {
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

  onFileAdded(event: Event): void {
    this.image = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.profile.picture = reader.result;
    });
    reader.readAsDataURL(this.image);
  }

}
