import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FeedbackService } from '../../../core/services/feedback.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, TranslateModule, FormsModule],
    templateUrl: './contact.component.html',
    styles: []
})
export class ContactComponent {
    private feedbackService = inject(FeedbackService);

    email = 'gabriel13iturre@gmail.com';
    copied = false;
    isSubmitting = false;
    showSuccess = false;
    showError = false;
    errorMessage = '';

    formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    copyEmail() {
        navigator.clipboard.writeText(this.email).then(() => {
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        });
    }

    onSubmit(form: NgForm) {
        if (form.invalid || this.isSubmitting) {
            return;
        }

        this.isSubmitting = true;
        this.showSuccess = false;
        this.showError = false;

        // Prepare feedback data
        const feedback = {
            name: this.formData.name,
            role: this.formData.subject, // Using subject as role
            message: `${this.formData.message}\n\nEmail: ${this.formData.email}`,
            avatar: '📧', // Email icon
            tag: 'Comunicación' // Valid enum value from backend
        };

        this.feedbackService.submitFeedback(feedback).subscribe({
            next: () => {
                this.isSubmitting = false;
                this.showSuccess = true;
                form.resetForm();
                this.formData = { name: '', email: '', subject: '', message: '' };

                // Hide success message after 5 seconds
                setTimeout(() => {
                    this.showSuccess = false;
                }, 5000);
            },
            error: (error) => {
                this.isSubmitting = false;
                this.showError = true;
                this.errorMessage = error.error?.message || 'Error al enviar el mensaje. Por favor, intenta de nuevo.';

                // Hide error message after 5 seconds
                setTimeout(() => {
                    this.showError = false;
                }, 5000);
            }
        });
    }
}
