import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { Footer } from '../../layout/footer/footer';
import { ChatComponent } from '../home/chat/chat.component';
import { HeroComponent } from '../home/hero/hero.component';
import { AboutComponent } from '../home/about/about.component';
import { TechStackComponent } from '../home/tech-stack/tech-stack.component';
import { ProjectsComponent } from '../home/projects/projects.component';
import { EducationComponent } from '../home/education/education.component';
import { ContactComponent } from '../home/contact/contact.component';
import { FeedbackComponent } from '../home/feedback/feedback.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        CommonModule,
        NavbarComponent,
        Footer,
        ChatComponent,
        HeroComponent,
        AboutComponent,
        TechStackComponent,
        ProjectsComponent,
        EducationComponent,
        ContactComponent,
        FeedbackComponent
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent { }
