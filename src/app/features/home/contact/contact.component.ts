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

        // Prepare feedback data for database
        const feedback = {
            name: this.formData.name,
            role: this.formData.subject, // Using subject as role
            message: `${this.formData.message}\n\nEmail: ${this.formData.email}`,
            avatar: '📧', // Email icon
            tag: 'Comunicación' // Valid enum value from backend
        };

        // Save to database
        this.feedbackService.submitFeedback(feedback).subscribe({
            next: () => {
                // After saving to DB, send email via FormSubmit
                this.sendEmailViaFormSubmit();

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

    private sendEmailViaFormSubmit() {
        // Create a hidden iframe to submit the form without redirecting
        const iframe = document.createElement('iframe');
        iframe.name = 'formsubmit-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        // Create a hidden form to submit to FormSubmit
        const formSubmitForm = document.createElement('form');
        formSubmitForm.action = 'https://formsubmit.co/gabriel13iturre@gmail.com';
        formSubmitForm.method = 'POST';
        formSubmitForm.target = 'formsubmit-iframe'; // Target the hidden iframe
        formSubmitForm.style.display = 'none';

        // Add form fields
        const fields = [
            { name: 'name', value: this.formData.name },
            { name: 'email', value: this.formData.email },
            { name: 'subject', value: this.formData.subject },
            { name: 'message', value: this.formData.message },
            { name: '_captcha', value: 'false' },
            { name: '_template', value: 'table' }
        ];

        fields.forEach(field => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = field.name;
            input.value = field.value;
            formSubmitForm.appendChild(input);
        });

        // Append form to body and submit
        document.body.appendChild(formSubmitForm);
        formSubmitForm.submit();

        // Clean up after a short delay
        setTimeout(() => {
            document.body.removeChild(formSubmitForm);
            document.body.removeChild(iframe);
        }, 2000);
    }
}
