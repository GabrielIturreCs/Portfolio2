import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Feedback {
    _id?: string;
    name: string;
    role?: string;
    message: string;
    avatar: string;
    tag: string;
    likes?: number;
    createdAt?: Date;
}

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
    private http = inject(HttpClient);
    // Use Render URL as default, or localhost for development if needed
    private apiUrl = 'https://backendportfolio-4q0n.onrender.com/api/feedback';
    // private apiUrl = 'http://localhost:3000/api/feedback';

    getFeedback(): Observable<Feedback[]> {
        return this.http.get<Feedback[]>(this.apiUrl);
    }

    submitFeedback(feedback: Feedback): Observable<Feedback> {
        return this.http.post<Feedback>(this.apiUrl, feedback);
    }

    likeFeedback(id: string): Observable<Feedback> {
        return this.http.post<Feedback>(`${this.apiUrl}/${id}/like`, {});
    }
}
