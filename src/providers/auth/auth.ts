import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http,public af:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');

    af.authState;
  }


  login()
  {
    this.af.auth.signInAnonymously();
  }
  logout(){
    this.af.auth.signOut();
  }

}
