import { Injectable } from '@angular/core';
import { MessageClient } from '../../client/message.client';
import { Message } from '../../models/message.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private messageClient: MessageClient) { }

  public getMessage(): Observable<Message[]>{
    return this.messageClient.getMessages();
  }
}
