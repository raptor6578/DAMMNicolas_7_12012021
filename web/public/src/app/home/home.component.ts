import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  connected: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.connected$.subscribe(value => this.connected = value);
  }

}
