import { AboutUsPage } from './../pages/about-us/about-us';
import { SettingsPage } from './../pages/settings/settings';
import { ChatroomPage } from './../pages/chatroom/chatroom';
import { ChatFormPage } from './../pages/chat-form/chat-form';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatProvider } from '../providers/chat/chat';
import { AuthProvider } from '../providers/auth/auth';


//Angular
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig ={
  apiKey: "AIzaSyA_FNPM4lU60861rxFVI-P8xDBefXEjKmE",
  authDomain: "chatapp-78937.firebaseapp.com",
  databaseURL: "https://chatapp-78937.firebaseio.com",
  projectId: "chatapp-78937",
  storageBucket: "chatapp-78937.appspot.com",
  messagingSenderId: "683517534283"
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ChatFormPage,
    ChatroomPage,
    SettingsPage,
    AboutUsPage
    
   ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ChatFormPage,
    ChatroomPage,
    SettingsPage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider,
    AuthProvider
  ]
})
export class AppModule {}
