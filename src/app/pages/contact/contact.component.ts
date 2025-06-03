import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    name: 'Amey Shirlekar',
    email: 'ameyshirlekar021@gmail.com',
    phone: '+91 9307677284',
    location: 'Pune, India',
    linkedIn: 'https://www.linkedin.com/in/amey-shirlekar-102097363/',
    github: 'https://github.com/amey2605'
  };
}
