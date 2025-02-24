import { Component } from '@angular/core';
import { ThumbnailDownloaderService } from '../thumbnail-downloader.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // Import for security

@Component({
  selector: 'app-thumbnail-downloader',
  templateUrl: './thumbnail-downloader.component.html',
  styleUrls: ['./thumbnail-downloader.component.css']
})
export class ThumbnailDownloaderComponent {
  videoUrl: string = '';
  thumbnailUrl: SafeUrl | null = null; // Use SafeUrl
  errorMessage: string = '';
  isLoading: boolean = false; // Add loading indicator

  constructor(private thumbnailService: ThumbnailDownloaderService, private sanitizer: DomSanitizer) { }

  extractVideoId(url: string): string | null {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S*?[?&]v=|\S+?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  downloadThumbnail(): void {
    this.errorMessage = ''; // Clear previous errors
    if (!this.videoUrl) {
      this.errorMessage = 'Please enter a valid YouTube URL.';
      return;
    }

    this.isLoading = true; // Show loading indicator

    this.thumbnailService.downloadThumbnail(this.videoUrl).subscribe(
      (blob) => {
        this.isLoading = false; // Hide loading indicator
        if (blob && blob.size > 0) { // Check for valid blob and size
          const urlCreator = window.URL || window.webkitURL;
          const imageUrl = urlCreator.createObjectURL(blob);
          this.thumbnailUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl); // Sanitize URL
        } else {
          this.thumbnailUrl = null;
          this.errorMessage = 'Error fetching thumbnail or invalid data received. Please try again.';
        }
      },
      (error) => {
        this.isLoading = false; // Hide loading indicator
        this.thumbnailUrl = null;
        this.errorMessage = 'Error fetching the thumbnail. Please try again.';
        console.error("Thumbnail download error:", error); // Log the error for debugging
      }
    );
  }

  downloadImage(): void {
    if (this.thumbnailUrl) {
      const link = document.createElement('a');
      link.href = this.thumbnailUrl.toString(); // Use SafeUrl's toString()
      link.setAttribute('download', 'youtube-thumbnail.jpg');
      link.click();
      // URL.revokeObjectURL(this.thumbnailUrl);  No longer needed with SafeUrl
    }
  }
}