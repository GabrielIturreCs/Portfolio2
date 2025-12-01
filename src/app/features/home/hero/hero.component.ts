import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  copyEmail() {
    const email = 'gabriel13iturre@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      // Opcional: Mostrar mensaje de confirmación
      console.log('Email copiado al portapapeles');
    });
  }
}
