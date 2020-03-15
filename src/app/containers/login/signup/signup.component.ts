import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  @Output() siginAction = new EventEmitter();

  hide = true

  model = {
    username: '',
    password: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

  showSignIn() {
    this.siginAction.emit();
  }
}
