import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {environment} from '../environments/environment';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import {MaterialModule} from './modules/MaterialModule';
import { HomeComponent } from './containers/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      enableSourceMaps: true,
      disableConsoleLogging: !environment.dev
    }),
    MatPasswordStrengthModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
