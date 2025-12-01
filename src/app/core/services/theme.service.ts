import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    // Usamos Signal para el estado reactivo
    themeSignal = signal<Theme>('dark'); // Por defecto 'dark'

    private platformId = inject(PLATFORM_ID);

    constructor() {
        // Effect para aplicar la clase al <html> cuando cambia la señal
        effect(() => {
            if (isPlatformBrowser(this.platformId)) { // Solo en el navegador
                const theme = this.themeSignal();
                const htmlElement = document.documentElement;

                if (theme === 'dark') {
                    htmlElement.classList.add('dark');
                } else {
                    htmlElement.classList.remove('dark');
                }
                // Guardar preferencia en localStorage (opcional pero recomendado)
                localStorage.setItem('theme-preference', theme);
            }
        });

        // Cargar preferencia inicial si existe
        if (isPlatformBrowser(this.platformId)) {
            const savedTheme = localStorage.getItem('theme-preference') as Theme;
            if (savedTheme) {
                this.themeSignal.set(savedTheme);
            }
        }
    }

    toggleTheme() {
        this.themeSignal.update(current => (current === 'dark' ? 'light' : 'dark'));
    }

    isDark(): boolean {
        return this.themeSignal() === 'dark';
    }
}
