import { Component, inject, signal, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../core/services/chat.service';
import { animate, style, transition, trigger, state } from '@angular/animations';

interface Message {
    text: string;
    isUser: boolean;
    timestamp: Date;
}

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    animations: [
        trigger('slideUp', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }),
                animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
            ]),
            transition(':leave', [
                animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }))
            ])
        ]),
        trigger('messageAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})
export class ChatComponent implements AfterViewChecked {
    private chatService = inject(ChatService);

    @ViewChild('scrollContainer') privatescrollContainer!: ElementRef;

    isOpen = signal(false);
    isTyping = signal(false);
    messages = signal<Message[]>([]);
    newMessage = signal('');

    suggestedQuestions = [
        "¿Cuál es su Stack principal?",
        "Cuéntame sobre SUDO ERP",
        "¿Experiencia en Arquitectura?"
    ];

    constructor() {
        // Initial greeting
        this.messages.set([
            {
                text: "¡Hola! Soy el asistente virtual de Gabriel. Estoy aquí para responder tus dudas sobre su experiencia y proyectos. ¿En qué puedo ayudarte hoy?",
                isUser: false,
                timestamp: new Date()
            }
        ]);
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.privatescrollContainer.nativeElement.scrollTop = this.privatescrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }

    toggleChat() {
        this.isOpen.update(v => !v);
    }

    sendMessage(text: string = '') {
        const msgText = text || this.newMessage();
        if (!msgText.trim()) return;

        // Add user message
        this.messages.update(msgs => [...msgs, {
            text: msgText,
            isUser: true,
            timestamp: new Date()
        }]);

        this.newMessage.set('');
        this.isTyping.set(true);

        // Call API
        this.chatService.sendMessage(msgText).subscribe({
            next: (res) => {
                this.messages.update(msgs => [...msgs, {
                    text: res.response,
                    isUser: false,
                    timestamp: new Date()
                }]);
                this.isTyping.set(false);
            },
            error: (err) => {
                console.error('Chat error:', err);
                this.messages.update(msgs => [...msgs, {
                    text: "Lo siento, tuve un problema al procesar tu mensaje. Por favor intenta de nuevo.",
                    isUser: false,
                    timestamp: new Date()
                }]);
                this.isTyping.set(false);
            }
        });
    }
}
