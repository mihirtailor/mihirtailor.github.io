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
  advancedButton = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('cancel button is clicked');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('ok button is clicked');
      },
    },
  ];
  alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

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

  showResult(event: any) {
    console.log(event.detail.role);
  }
}
