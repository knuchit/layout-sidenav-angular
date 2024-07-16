import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideInOutAnimation } from './animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [SidebarComponent]
})
export class AppComponent {
  title = 'sidebar-animation1';



}
