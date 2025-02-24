import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThumbnailDownloaderService {

  private baseUrl: string = 'https://groovestacknew.azurewebsites.net/api/Thumbnail/'; // Your backend URL

  constructor(private http:HttpClient) { }

  downloadThumbnail(videoUrl: string): Observable<Blob>
  {
    const encodedUrl = encodeURIComponent(videoUrl);
    return this.http.get(`${this.baseUrl}${encodedUrl}`, { responseType: 'blob' });
  }
  
}
