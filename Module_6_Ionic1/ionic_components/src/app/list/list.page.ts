import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  NavController,
  IonItem,
  IonList,
  IonLabel,
  IonInput,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonLabel,
    IonList,
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ListPage implements OnInit {
  navCtrl: NavController = inject(NavController);

  constructor() {}

  navigateBack() {
    this.navCtrl.back();
  }

  ngOnInit() {}
}
