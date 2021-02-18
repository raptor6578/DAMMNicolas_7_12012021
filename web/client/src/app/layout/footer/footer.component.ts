import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  admin: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.admin$.subscribe(admin => this.admin = admin);
  }

}
