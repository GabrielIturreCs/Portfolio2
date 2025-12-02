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
    visibleFeedbacks = signal<Feedback[]>([]);
    showModal = signal(false);
    showIdentityModal = signal(false);
    isSubmitting = signal(false);

    // Pagination
    itemsPerPage = 6;
    currentPage = 1;
    hasMore = signal(false);

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
        'Arquitectura Sólida',
        'Código Limpio',
        'Offline-First',
        'Escalabilidad',
        'Pixel-Perfect UI',
        'Experiencia de Usuario (UX)',
        'Seguridad',
        'Visión de Producto',
        'Excelente Portafolio',
        'Gran Profesional',
        'Comunicación'
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
            next: (data) => {
                // Filter out contact form messages (only show professional endorsements)
                // Sort by likes (descending)
                const professionalFeedbacks = data
                    .filter(f => f.tag !== 'Comunicación')
                    .sort((a, b) => (b.likes || 0) - (a.likes || 0));

                this.feedbacks.set(professionalFeedbacks);
                this.updateVisibleFeedbacks();
            },
            error: (err) => console.error('Error loading feedback', err)
        });
    }

    updateVisibleFeedbacks() {
        const all = this.feedbacks();
        const count = this.currentPage * this.itemsPerPage;
        this.visibleFeedbacks.set(all.slice(0, count));
        this.hasMore.set(all.length > count);
    }

    loadMore() {
        this.currentPage++;
        this.updateVisibleFeedbacks();
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

    like(feedback: Feedback) {
        if (!feedback._id) return;

        // Check if already liked locally
        const likedIds = JSON.parse(localStorage.getItem('liked_feedbacks') || '[]');
        if (likedIds.includes(feedback._id)) return;

        this.processLike(feedback._id);
    }

    processLike(id: string) {
        this.feedbackService.likeFeedback(id).subscribe({
            next: (updated) => {
                // Update local state
                this.feedbacks.update(list =>
                    list.map(f => f._id === id ? { ...f, likes: updated.likes } : f)
                        .sort((a, b) => (b.likes || 0) - (a.likes || 0))
                );
                this.updateVisibleFeedbacks();

                // Save to local storage
                const likedIds = JSON.parse(localStorage.getItem('liked_feedbacks') || '[]');
                likedIds.push(id);
                localStorage.setItem('liked_feedbacks', JSON.stringify(likedIds));
            },
            error: (err) => console.error('Error liking feedback', err)
        });
    }

    isLiked(id?: string): boolean {
        if (!id) return false;
        const likedIds = JSON.parse(localStorage.getItem('liked_feedbacks') || '[]');
        return likedIds.includes(id);
    }

    submit() {
        if (this.form.invalid) return;

        this.isSubmitting.set(true);
        const feedbackData = this.form.value as Feedback;

        this.feedbackService.submitFeedback(feedbackData).subscribe({
            next: (newFeedback) => {
                this.feedbacks.update(list => [newFeedback, ...list]);
                this.updateVisibleFeedbacks();
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
