import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
    providedIn: 'root',
  })

export class MessageClient {
    constructor(private http: HttpClient){}

    public getMessages(): Observable<any>{
        return this.http.get<Message[]>(
            environment.apiUrl + "/chat/message"
        );
    }
}