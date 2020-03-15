import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {fadeInFadeOut} from '../../../share/animations/fadeInFadeOut';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass'],
  animations: [fadeInFadeOut]
})
export class SigninComponent implements OnInit {

  @Output() sigupAction = new EventEmitter();

  hide = true;
  he = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  showSignUp() {
    console.log('hellou child componet');
    this.sigupAction.emit();
  }
}
