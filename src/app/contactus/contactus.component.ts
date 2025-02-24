import { Component, OnInit } from '@angular/core';
import { ContactForm } from '../contactForm';
import { ContactUsService } from '../contact-service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  contactForm: ContactForm;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private contactFormService: ContactUsService) {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      website: '',
      services: [],
      message: '',
    };
  }

  ngOnInit(): void {
    console.log('Contact Us Component Loaded');
  }

  submitForm(): void {
    if (!this.contactForm) return;
    this.contactFormService.sendContactForm(this.contactForm).subscribe({
      next: () => {
        this.successMessage = 'Thank you for reaching out. We will get back to you shortly.';
        this.errorMessage = null;
        this.contactForm = { name: '', email: '', phone: '', website: '', services: [], message: '' }; // Reset form
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: () => {
        this.errorMessage = 'Something went wrong. Please try again.';
        this.successMessage = null;
      },
    });
  }
}
