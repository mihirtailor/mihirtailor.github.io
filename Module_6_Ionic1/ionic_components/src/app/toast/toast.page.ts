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
  IonToast,
  ToastController,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [
    IonToast,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class ToastPage implements OnInit {
  navCtrl: NavController = inject(NavController);
  toastCtrl: ToastController = inject(ToastController);
  isToastOpen = false;
  toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];
  constructor() {}

  ngOnInit() {}

  navigateBack() {
    this.navCtrl.navigateBack('/home', {
      animated: true,
      animationDirection: 'back',
    });
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      position: position,
    });
    await toast.present();
  }

  setRoleMessage(ev: any) {
    const { role } = ev.detail;
    console.log(`Dismissed with role: ${role}`);
  }
}
