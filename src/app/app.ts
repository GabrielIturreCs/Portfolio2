import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ChatComponent } from './features/home/chat/chat.component';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.html',
})
export class App { }
