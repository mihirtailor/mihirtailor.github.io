import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  constructor(private navCtrl: NavController) {
    // navigate to about page
  }
  navigateToBackHome() {
    this.navCtrl.navigateBack('/home');
  }

  ngOnInit() {}
}
