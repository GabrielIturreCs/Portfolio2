import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './about.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent { }
