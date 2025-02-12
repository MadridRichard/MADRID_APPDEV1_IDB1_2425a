import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent, ContactFormComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APPDEVFGL02';
}
