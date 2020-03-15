import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from '../login.component';

import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SigninComponent} from '../signin/signin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {SignupComponent} from '../signup/signup.component';
import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatPasswordStrengthModule
  ],
  exports: [SigninComponent, SignupComponent]
})
export class LoginModule { }
