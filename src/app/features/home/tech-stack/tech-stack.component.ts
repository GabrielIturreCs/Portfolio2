import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-tech-stack',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './tech-stack.component.html',
    styles: [`
    :host {
      display: block;
    }
    .glass-card {
      @apply relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/30 hover:bg-slate-800/60 hover:shadow-2xl hover:shadow-primary-500/10;
    }
    .tech-icon {
      @apply h-10 w-10 transition-all duration-300 group-hover:scale-110;
    }
  `]
})
export class TechStackComponent { }
