import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {

  titlecard = 'SIGN IN';
  login = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  showSignUp($event: any) {
    console.log('hello');
    this.titlecard = 'SIGN UP'
    this.login = false;
  }

  showSign($event: any) {
    this.titlecard = 'SIGN IN'
    this.login = true;
  }
}
