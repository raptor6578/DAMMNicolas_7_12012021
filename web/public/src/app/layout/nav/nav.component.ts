import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  connected: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.connected$.subscribe(value => this.connected = value);
  }

}
