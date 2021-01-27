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

  constructor(private profileService: ProfileService) {
    this.profile = {};
  }

  ngOnInit(): void {
    this.profileService.getProfile()
      .then(profile => {
        this.profile = profile;
        if (!this.profile.picture) {
          this.profile.picture = `url("${this.env.urlApi}/images/default-profile.png")`;
        }
      });
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }

  pictureOnChange(event): void {
    const files: FileList = event.target.files;
    const file = files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.profile.picture = `url("${reader.result}")`;
    });
    reader.readAsDataURL(file);
  }

}
