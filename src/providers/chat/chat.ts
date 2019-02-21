import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {AngularFireDatabase } from'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

import { Message } from '../../model/Message_model';




@Injectable()
export class ChatProvider {

  messages:Observable<Message[]>;

  constructor(public http: Http ,public db :AngularFireDatabase) {
    console.log('Hello ChatProvider Provider');
    
    
  }

  send_msg()
  {
    console.log("Chat Service Called....!");
    

  
  }



}
