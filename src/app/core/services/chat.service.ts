import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private http = inject(HttpClient);

    // Use Render URL as default, or localhost for development
    // private apiUrl = 'https://backendportfolio-4q0n.onrender.com/api/chat';
    private apiUrl = 'http://localhost:3000/api/chat';

    sendMessage(message: string): Observable<{ response: string }> {
        return this.http.post<{ response: string }>(this.apiUrl, { message });
    }
}
