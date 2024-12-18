import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonCol,
  IonRow,
  IonGrid,
  IonImg,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PhotoService } from '../services/photo.service';
import { UserPhoto } from '../user-photo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    CommonModule,
    IonImg,
  ],
})
export class Tab2Page {
  photoService: PhotoService = inject(PhotoService);

  public photos: UserPhoto[] = [];

  constructor() {}

  clickPicture() {
    this.photoService.addPhotoToGallery();
  }

  // this.photos.unshift({
  //   filepath: "soon",
  //   webviewPath: photo.webPath
  // })
}
