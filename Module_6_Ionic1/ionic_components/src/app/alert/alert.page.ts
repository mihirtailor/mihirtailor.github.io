import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  NavController,
  IonButton,
  IonAlert,
  AlertController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [
    IonAlert,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class AlertPage implements OnInit {
  navCtrl: NavController = inject(NavController);
  alertCtrl: AlertController = inject(AlertController);
  alertOpen = false;

  alertsButton = ['Confirm', 'Cancel'];
  isOpenAlertButton = ['Action'];
  constructor() {}

  ngOnInit() {}

  navigateBack() {
    this.navCtrl.back();
  }

  showAlert(val: boolean) {
    this.alertOpen = val;
  }

  async alertControl() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'This is an alert!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
