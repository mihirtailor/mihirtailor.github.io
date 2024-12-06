import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonIcon,
  IonButton,
  NavController,
} from '@ionic/angular/standalone';
import {
  batteryCharging,
  heart,
  home,
  person,
  radio,
  star,
  storefront,
  wifi,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonItem,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class IconPage implements OnInit {
  constructor(private navCtrl: NavController) {
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
    this.navCtrl.navigateBack('/home', {
      animated: true,
      animationDirection: 'back',
    });
  }

  ngOnInit() {}
}
