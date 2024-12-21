import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {
  NativeSettings,
  AndroidSettings,
  IOSSettings,
} from 'capacitor-native-settings';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonRouterLink,
    RouterModule,
  ],
})
export class Tab1Page {
  constructor() {}

  async openSettings(setting: string) {
    // use plugin to open settings

    let iosOption: IOSSettings = IOSSettings.WiFi;

    if (setting === 'wifi') {
      iosOption = IOSSettings.WiFi;
    } else if (setting === 'keyboard') {
      iosOption = IOSSettings.Keyboard;
    }

    NativeSettings.openIOS({
      option: IOSSettings.App,
    });
  }
}
