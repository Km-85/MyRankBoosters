import { Component } from '@angular/core';
import { ImageCompressorService } from '../image-compressor.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-compressor',
  templateUrl: './image-compressor.component.html',
  styleUrls: ['./image-compressor.component.css'],
})
export class ImageCompressorComponent {
  selectedFiles: File[] = [];
  compressedBlob: Blob | null = null;
  convertedImage: SafeUrl | null = null;
  isSingleFile: boolean = true;
  isCompressed: boolean = false;
  isLoading: boolean = false;
  originalFileSizes: number[] = [];
  errorMessage: string | null = null;

  constructor(
    private imageService: ImageCompressorService,
    private sanitizer: DomSanitizer
  ) {}

  onFileSelected(event: Event): void {
    this.errorMessage = null;
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFiles = Array.from(input.files);
      this.isSingleFile = this.selectedFiles.length === 1;
      this.originalFileSizes = this.selectedFiles.map(file => file.size);

      const validImages = this.selectedFiles.every(file => file.type.startsWith('image/'));
      if (!validImages) {
        this.errorMessage = 'Please select only image files.';
        this.selectedFiles = [];
        this.originalFileSizes = [];
        return;
      }
    }
  }

  convertImages(): void {
    this.errorMessage = null;
    if (this.selectedFiles.length > 0) {
      this.isLoading = true;
      const formData = new FormData();
      this.selectedFiles.forEach((file) => formData.append('imageFiles', file));

      this.imageService.compressImages(formData).subscribe(
        (data: Blob) => {
          this.compressedBlob = data;
          const contentType = this.compressedBlob.type;
          const fileExtension = contentType.split('/')[1]; // Extract extension
          const fileName = `compressed_image.${fileExtension}`; // Use correct extension

          if (this.isSingleFile) {
            this.convertedImage = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.compressedBlob));
          }
          this.isCompressed = true;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = 'Error converting images. Please try again.';
          console.error('Error converting images', error);
        }
      );
    }
  }

  downloadImage(): void {
    if (this.compressedBlob) {
      const contentType = this.compressedBlob.type;
      const fileExtension = contentType.split('/')[1]; // Extract extension
      const fileName = `compressed_image.${fileExtension}`; // Use correct extension

      const link = document.createElement('a');
      link.href = URL.createObjectURL(this.compressedBlob);
      link.download = fileName; // Use the dynamically determined filename
      link.click();
    }
  }

  getCompressedFileSize(): string {
    if (this.compressedBlob) {
      return this.formatBytes(this.compressedBlob.size);
    }
    return 'N/A';
  }

  getOriginalFileSize(index: number): string {
    if (this.originalFileSizes && this.originalFileSizes[index]) {
      return this.formatBytes(this.originalFileSizes[index]);
    }
    return 'N/A';
  }

  private formatBytes(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}