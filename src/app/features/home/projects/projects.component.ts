import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './projects.component.html',
    styles: []
})
export class ProjectsComponent {
    // Sudo ERP Images
    sudoImages: string[] = [
        'assets/images/t7.PNG',
        'assets/images/t10.PNG',
        'assets/images/t11.PNG',
        'assets/images/t9.PNG'
    ];
    currentSudoIndex: number = 0;

    // GhostCut Images
    ghostCutImages: string[] = [
        'assets/images/ghostcut_ghostcut.webp',
        'assets/images/ghostcut2_ghostcut.webp',
        'assets/images/ghostcut3_ghostcut.webp'
    ];
    currentGhostCutIndex: number = 0;

    // Peluqueria Images
    peluqueriaImages: string[] = [
        'assets/images/peluweb1_ghostcut.webp',
        'assets/images/peluweb2_ghostcut.webp',
        'assets/images/peluweb3_ghostcut.webp',
        'assets/images/peluweb4_ghostcut.webp',
        'assets/images/peluweb5_ghostcut.webp'
    ];
    currentPeluqueriaIndex: number = 0;

    // Dental System Images
    dentalImages: string[] = [
        'assets/images/consultorio1_ghostcut.webp',
        'assets/images/consultorio2_ghostcut.webp'
    ];
    currentDentalIndex: number = 0;

    // Microservices Images
    microservicesImages: string[] = [
        'assets/images/t4.PNG'
    ];
    currentMicroservicesIndex: number = 0;

    // --- Sudo Controls ---
    nextSudoImage() {
        this.currentSudoIndex = (this.currentSudoIndex + 1) % this.sudoImages.length;
    }
    prevSudoImage() {
        this.currentSudoIndex = (this.currentSudoIndex - 1 + this.sudoImages.length) % this.sudoImages.length;
    }
    get currentSudoImage(): string {
        return this.sudoImages[this.currentSudoIndex];
    }

    // --- GhostCut Controls ---
    nextGhostCutImage() {
        this.currentGhostCutIndex = (this.currentGhostCutIndex + 1) % this.ghostCutImages.length;
    }
    prevGhostCutImage() {
        this.currentGhostCutIndex = (this.currentGhostCutIndex - 1 + this.ghostCutImages.length) % this.ghostCutImages.length;
    }
    get currentGhostCutImage(): string {
        return this.ghostCutImages[this.currentGhostCutIndex];
    }

    // --- Peluqueria Controls ---
    nextPeluqueriaImage() {
        this.currentPeluqueriaIndex = (this.currentPeluqueriaIndex + 1) % this.peluqueriaImages.length;
    }
    prevPeluqueriaImage() {
        this.currentPeluqueriaIndex = (this.currentPeluqueriaIndex - 1 + this.peluqueriaImages.length) % this.peluqueriaImages.length;
    }
    get currentPeluqueriaImage(): string {
        return this.peluqueriaImages[this.currentPeluqueriaIndex];
    }

    // --- Dental Controls ---
    nextDentalImage() {
        this.currentDentalIndex = (this.currentDentalIndex + 1) % this.dentalImages.length;
    }
    prevDentalImage() {
        this.currentDentalIndex = (this.currentDentalIndex - 1 + this.dentalImages.length) % this.dentalImages.length;
    }
    get currentDentalImage(): string {
        return this.dentalImages[this.currentDentalIndex];
    }

    // --- Microservices Controls ---
    nextMicroservicesImage() {
        this.currentMicroservicesIndex = (this.currentMicroservicesIndex + 1) % this.microservicesImages.length;
    }
    prevMicroservicesImage() {
        this.currentMicroservicesIndex = (this.currentMicroservicesIndex - 1 + this.microservicesImages.length) % this.microservicesImages.length;
    }
    get currentMicroservicesImage(): string {
        return this.microservicesImages[this.currentMicroservicesIndex];
    }
}
