import { AuthProvider } from './../../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatroomPage } from './../chatroom/chatroom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string =" ";

  user:any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private af: AngularFireAuth,public auth:AuthProvider,
    public alertCtrl: AlertController
  ) 
    {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login()
  {

    if(this.username != " ")
    {
      this.auth.login();
      this.navCtrl.setRoot(ChatroomPage,
        {
          UserName:this.username
        }
      );
   
    }
    else{
      this.showAlert();
    }

    

  }
  showAlert()
  {
    let alert = this.alertCtrl.create({
      title: 'Invalid User Name ',
      subTitle: 'Please enter a User Name',
      buttons: ['OK']
    });
    alert.present();
  }

}
