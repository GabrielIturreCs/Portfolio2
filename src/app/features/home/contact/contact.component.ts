import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, TranslateModule, FormsModule],
    templateUrl: './contact.component.html',
    styles: []
})
export class ContactComponent {
    email = 'gabriel13iturre@gmail.com';
    copied = false;

    copyEmail() {
        navigator.clipboard.writeText(this.email).then(() => {
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        });
    }
}
