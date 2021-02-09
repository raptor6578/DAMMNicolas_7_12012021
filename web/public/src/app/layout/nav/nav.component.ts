import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {faHome, faIdBadge, faIdCard} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  faHome = faHome;
  faIdCard = faIdCard;
  faIdBadge = faIdBadge;
  connected: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.connected$.subscribe(value => this.connected = value);
  }

}
