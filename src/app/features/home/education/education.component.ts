import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './education.component.html',
    styles: []
})
export class EducationComponent { }
