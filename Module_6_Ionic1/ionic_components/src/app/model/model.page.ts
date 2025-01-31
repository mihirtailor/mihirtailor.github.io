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
  IonFooter,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonFooter,
  ],
})
export class ModelPage implements OnInit {
  navCtrl: NavController = inject(NavController);
  constructor() {}

  ngOnInit() {}

  navigateBack() {
    this.navCtrl.back();
  }
}
