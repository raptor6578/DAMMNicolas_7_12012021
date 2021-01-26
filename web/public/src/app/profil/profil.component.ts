import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {

  message: string;
  date: Date;
  pictureUrl: string | ArrayBuffer;
  file: File;
  env = environment;

  constructor() {
    this.date = new Date(Date.now());
    this.pictureUrl = `url("${this.env.urlApi}/images/default-profile.png")`;
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }

  pictureOnChange(event): void {
    const files: FileList = event.target.files;
    this.file = files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.pictureUrl = `url("${reader.result}")`;
    });
    reader.readAsDataURL(this.file);
  }

}
