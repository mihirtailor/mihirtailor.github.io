import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadService } from './upload.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentImage: any;
  preview = '';
  uploadService = inject(UploadService);

  selectFile(event: any) {
    const uploadedFile = event.target.files;
    this.preview = '';

    if (uploadedFile) {
      const file: File | null = uploadedFile.item(0);

      if (file) {
        this.currentImage = file;
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentImage);
      }
    }
  }

  uploadImage() {
    if (this.currentImage) {
      this.uploadService.uploadImage(this.currentImage).subscribe({
        next: (data: any) => {
          console.log(data);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
