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
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonCard,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonThumbnail,
  ],
})
export class CardPage implements OnInit {
  navCtrl: NavController = inject(NavController);
  constructor() {}

  ngOnInit() {}

  navigateBack() {
    this.navCtrl.back();
  }
}
