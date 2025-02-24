import { Component, Renderer2 } from '@angular/core';
import { ImageConverterService } from '../image-converter.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // Import DomSanitizer and SafeUrl

@Component({
  selector: 'app-image-converter',
  templateUrl: './image-converter.component.html',
  styleUrls: ['./image-converter.component.css'],
})
export class ImageConverterComponent {
  selectedFormat: string = 'jpeg';
  imageFiles: FileList | null = null;
  imageFilesArray: File[] = [];
  convertedImage: SafeUrl | null = null; // Use SafeUrl
  isLoading: boolean = false;
  errorMessage: string | null = null; // For error message display

  constructor(
    private imageConverterService: ImageConverterService,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer // Inject DomSanitizer
  ) {}

  onImageSelected(event: Event): void {
    this.errorMessage = null; // Clear any previous errors
    const input = event.target as HTMLInputElement;
    this.imageFiles = input.files;
    this.imageFilesArray = []; // Reset array

    if (this.imageFiles && this.imageFiles.length > 0) {
      for (let i = 0; i < this.imageFiles.length; i++) {
        const file = this.imageFiles[i];
        if (file.type.startsWith('image/')) {
          this.imageFilesArray.push(file); // Add only image files
        } else {
          this.errorMessage = "Only image files are allowed."; // Set error message
          input.value = ''; // Clear the invalid file
          return; // Stop processing
        }
      }
    }

  }


  convertImages(): void {
    this.errorMessage = null; // Clear any previous errors
    if (!this.imageFilesArray || this.imageFilesArray.length === 0) {
      this.errorMessage = 'No files selected'; // Set error message
      return;
    }

    this.isLoading = true;

    const formData = new FormData();

    this.imageFilesArray.forEach((file) => {
      formData.append('imageFiles', file, file.name);
    });

    this.imageConverterService.convertImages(formData, this.selectedFormat).subscribe(
      (data: Blob) => { // Type the data as Blob
        if (data.type === 'application/zip') {
          this.handleZipFile(data);
        } else {
          this.handleSingleFile(data);
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error converting image', error);
        this.errorMessage = 'Error converting image. Please try again.'; // Set error message
        this.isLoading = false;
      }
    );
  }

  handleZipFile(data: Blob): void {
    const link = document.createElement('a');
    const zipUrl = URL.createObjectURL(data);
    link.href = zipUrl;
    link.download = 'converted-images.zip';
    link.click();
  }

  handleSingleFile(data: Blob): void {
    const imageUrl = URL.createObjectURL(data);
    this.convertedImage = this.sanitizer.bypassSecurityTrustUrl(imageUrl); // Use DomSanitizer
  }

  downloadImage(): void {
    if (this.convertedImage) {
      this.isLoading = true;

      const link = document.createElement('a');
      link.href = this.convertedImage.toString(); // Convert SafeUrl to String
      link.download = 'converted-image';
      link.click();

      this.isLoading = false;
    }
  }

  scrollToTop(): void {
    this.renderer.setProperty(window, 'scrollTo', 0);
  }
}