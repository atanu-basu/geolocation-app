import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';
import { HomePage } from '../pages/home/home';

const config = {
  apiKey: 'AIzaSyA4eaU4NxODupDVZdrKa_FhmGxAE5pavf8',
  authDomain: 'geotracking-522e9.firebaseapp.com',
  databaseURL: 'https://geotracking-522e9.firebaseio.com/',
  projectId: 'geotracking-522e9',
  storageBucket: 'gs://geotracking-522e9.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
