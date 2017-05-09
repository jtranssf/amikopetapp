import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//pages
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Home } from '../pages/home/home';
import { Start } from '../pages/start/start';
import { Feed } from '../pages/feed/feed';
import { Play } from '../pages/play/play';

//providers
import { AppUser } from '../providers/app-user';

import { HttpModule } from '@angular/http';


let injections: any[] = [
    MyApp,
    Login,
    Register,
    Home,
    Start,
    Feed,
    Play
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUser
  ]
})
export class AppModule {}
