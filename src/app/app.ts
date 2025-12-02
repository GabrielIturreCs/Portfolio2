import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './features/home/hero/hero.component';
import { AboutComponent } from './features/home/about/about.component';
import { TechStackComponent } from './features/home/tech-stack/tech-stack.component';
import { ProjectsComponent } from './features/home/projects/projects.component';
import { EducationComponent } from './features/home/education/education.component';
import { ContactComponent } from './features/home/contact/contact.component';
import { FeedbackComponent } from './features/home/feedback/feedback.component';
import { ChatComponent } from './features/home/chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    TechStackComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FeedbackComponent,
    ChatComponent,
    TranslateModule
  ],
  templateUrl: './app.html',
})
export class App { }
