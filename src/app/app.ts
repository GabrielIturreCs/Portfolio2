import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './features/home/hero/hero.component';
import { AboutComponent } from './features/home/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, AboutComponent],
  template: `
    <app-navbar></app-navbar>
    
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <router-outlet></router-outlet> </main>
    
    `
})
export class App { }
