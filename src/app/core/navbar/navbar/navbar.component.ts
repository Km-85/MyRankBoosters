import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownOpen: string | null = null;

  toggleDropdown(event: Event, menu: string) {
    event.preventDefault(); // Prevent page reload
    this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
  }

  closeNavbar() {
    this.dropdownOpen = null;
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar) {
      navbar.classList.remove('show'); // Close mobile navbar after clicking a link
    }
  }

  toggleNavbar() {
    const navbar = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show'); // Close if open
    } else {
      navbar.classList.add('show'); // Open if closed
    }
  }
  
}
