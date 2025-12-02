import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Feedback, FeedbackService } from '../../../core/services/feedback.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-feedback',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslateModule],
    templateUrl: './feedback.component.html',
    styles: [`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `],
    animations: [
        trigger('fadeInScale', [
            transition(':enter', [
                style({ opacity: 0, transform: 'scale(0.95)' }),
                animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
            ]),
            transition(':leave', [
                animate('150ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
            ])
        ])
    ]
})
export class FeedbackComponent {
    private fb = inject(FormBuilder);
    private feedbackService = inject(FeedbackService);

    feedbacks = signal<Feedback[]>([]);
    showModal = signal(false);
    isSubmitting = signal(false);

    // Pre-set avatars (using emojis/SVGs for now as requested)
    avatars = [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Mila',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Bella',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe'
    ];

    tags = [
        'Calidad de Código',
        'Arquitectura',
        'Velocidad',
        'Comunicación',
        'Diseño UX',
        'Frontend',
        'Experiencia de Usuario',
        'Lógica Backend',
        'Innovación',
        'Liderazgo'
    ];

    form = this.fb.group({
        name: ['', [Validators.required]],
        role: [''], // Optional
        message: ['', [Validators.required, Validators.maxLength(500)]],
        avatar: [this.avatars[0], [Validators.required]],
        tag: [this.tags[0], [Validators.required]]
    });

    constructor() {
        this.loadFeedbacks();
    }

    loadFeedbacks() {
        this.feedbackService.getFeedback().subscribe({
            next: (data) => this.feedbacks.set(data),
            error: (err) => console.error('Error loading feedback', err)
        });
    }

    openModal() {
        this.showModal.set(true);
    }

    closeModal() {
        this.showModal.set(false);
        this.form.reset({
            avatar: this.avatars[0],
            tag: this.tags[0]
        });
    }

    selectAvatar(avatar: string) {
        this.form.patchValue({ avatar });
    }

    selectTag(tag: string) {
        this.form.patchValue({ tag });
    }

    submit() {
        if (this.form.invalid) return;

        this.isSubmitting.set(true);
        const feedbackData = this.form.value as Feedback;

        this.feedbackService.submitFeedback(feedbackData).subscribe({
            next: (newFeedback) => {
                this.feedbacks.update(list => [newFeedback, ...list]);
                this.isSubmitting.set(false);
                this.closeModal();
            },
            error: (err) => {
                console.error('Error submitting feedback', err);
                this.isSubmitting.set(false);
            }
        });
    }
}
