import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from './contactForm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private apiUrl = 'https://groovestacknew.azurewebsites.net/api/ContactUs';  // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Method to send the contact form data to the backend
  sendContactForm(formData: ContactForm): Observable<ContactForm> {
    return this.http.post<ContactForm>(this.apiUrl, formData);
  }
}
