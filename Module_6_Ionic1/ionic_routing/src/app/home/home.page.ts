import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appName = environment.appName;
  apiEndpoint = environment.apiEndpoint;

  // we can use NavController to navigate to another page
  constructor(private navCtrl: NavController) {
    // navigate to about page
  }
  navigateToAbout() {
    this.navCtrl.navigateForward('/about');
  }

  navigateToContact() {
    this.navCtrl.navigateForward('/contact');
  }
}
