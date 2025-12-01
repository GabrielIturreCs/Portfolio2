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
    images: string[] = [
        'assets/images/t7.PNG',
        'assets/images/t10.PNG',
        'assets/images/t11.PNG',
        'assets/images/t9.PNG'
    ];
    currentImageIndex: number = 0;

    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }

    prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }

    get currentImage(): string {
        return this.images[this.currentImageIndex];
    }
}
