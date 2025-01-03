import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  heart,
  star,
  home,
  person,
  radio,
  storefront,
  wifi,
  batteryCharging,
} from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  NavController,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
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
export class ButtonPage implements OnInit {
  navCtrl: NavController = inject(NavController);

  constructor() {
    addIcons({
      heart,
      star,
      home,
      person,
      radio,
      storefront,
      wifi,
      batteryCharging,
    });
  }

  navigateBack() {
    this.navCtrl.back();
  }

  ngOnInit() {}
}
