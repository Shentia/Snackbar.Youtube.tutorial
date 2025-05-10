import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  template: `
    <app-contact-form></app-contact-form>
  `,
  imports: [ ContactFormComponent ]
})
export class App {
}

bootstrapApplication(App);
