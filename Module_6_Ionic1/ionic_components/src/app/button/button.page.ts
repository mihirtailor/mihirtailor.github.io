import { Component, OnInit } from '@angular/core';
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
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonIcon,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ButtonPage implements OnInit {
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

  ngOnInit() {}
}
