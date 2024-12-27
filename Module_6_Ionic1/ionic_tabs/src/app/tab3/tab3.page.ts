import { Component } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    ExploreContainerComponent,
  ],
})
export class Tab3Page {
  contacts: any[] = [];

  constructor() {}

  async loadContacts() {
    const projection = {
      name: true,
      phones: true,
      emails: true,
    };

    try {
      const permission = await Contacts.checkPermissions();
      if (permission.contacts === 'granted') {
        const result = await Contacts.getContacts({ projection });
        this.contacts = result.contacts;
      } else {
        const request = await Contacts.requestPermissions();
        if (request.contacts === 'granted') {
          const result = await Contacts.getContacts({ projection });
          this.contacts = result.contacts;
        }
      }
    } catch (error) {
      console.log('Error loading contacts:', error);
    }
  }

  ionViewWillEnter() {
    this.loadContacts();
  }
}
