import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageCompressorService {

  private apiUrl = 'https://groovestacknew.azurewebsites.net/api/ImageCompressor/compress' // Adjust API URL

  constructor(private http: HttpClient) {}

  // Method to send images to the backend and get compressed result
  compressImages(formData: FormData): Observable<Blob> {
    return this.http.post(this.apiUrl, formData, { responseType: 'blob' });
  }
}
