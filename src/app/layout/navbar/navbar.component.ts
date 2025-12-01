import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private translate = inject(TranslateService);
  themeService = inject(ThemeService);
  currentLang = signal('es');

  // Array de links para mantener el HTML limpio
  navLinks = [
    { label: 'NAV.HOME', fragment: 'home' },
    { label: 'NAV.ABOUT', fragment: 'about' },
    { label: 'NAV.PROJECTS', fragment: 'projects' },
    { label: 'NAV.CONTACT', fragment: 'contact' }
  ];

  constructor() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang.set(lang);
  }
}