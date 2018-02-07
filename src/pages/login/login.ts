import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Users } from './../../app/app.users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = { } as Users;
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: Users) {
    try {
      const result =  await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);

      if (result) {
        this.navCtrl.setRoot('HomePage');
      }
    } catch(e) {
      console.error(e);
    }
  }

  async register(user: Users) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot('LoginPage');
      }
    } catch (e) {
      console.error(e);
    }
  }
}
