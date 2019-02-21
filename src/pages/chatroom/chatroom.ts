import { AngularFireDatabase } from 'angularfire2/database';
import { ChatProvider } from './../../providers/chat/chat';
import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import * as firebase from 'firebase/app';

import { Message } from '../../model/Message_model';

import { Observable } from 'rxjs/Observable';

import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatroomPage {

  UserName: string;


  Message: string = "";

  messages:Observable<Message[]>;
  

  constructor( 
    public navCtrl: NavController, public navParams: NavParams ,
    public chat:ChatProvider,
    public loadingCtrl: LoadingController,
     private http:Http, public db: AngularFireDatabase) {
      
      
      this.messages = db.list('/chat').valueChanges();
      
      this.UserName = navParams.get('UserName');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatroomPage');
    this.presentLoading();
    
  }

  send()
  {
    console.log("Message send......!");
    this.db.list('/chat').push({
      UserName : this.UserName ,
      Message : this.Message
    });
    this.Message = " ";    
  }

  setting()
  {
    this.navCtrl.push(SettingsPage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Loading Messages....",
      duration: 3000
    });
    loader.present();
  }



}
