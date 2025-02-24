import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageConverterService {

  private apiUrl = 'https://groovestacknew.azurewebsites.net/api/ImageConverter/convert'; // Adjust API URL

  constructor(private http: HttpClient) {}

  // Converts images to the selected format
  convertImages(formData: FormData, targetFormat: string): Observable<Blob> {
    const headers = new HttpHeaders(); // Add any required headers

    return this.http.post(this.apiUrl + `?targetFormat=${targetFormat}`, formData, {
      headers: headers,
      responseType: 'blob' // Expecting a Blob response (image or zip)
    });
  }
}
