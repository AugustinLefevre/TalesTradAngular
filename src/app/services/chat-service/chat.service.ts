import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { environment } from '../../../environments/environment';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  disabled = true;
  private stompClient!: Stomp.Client;
  greetings: Message[] = [];

  constructor() {

  }

  isActualUser(id: string | null) {
    return id == localStorage.getItem("userId");
  }

  connect() {
    const _this = this;
    const socket = new SockJS(environment.apiUrl + '/chat');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe('/start/initial', function(msg){
        const message: Message = JSON.parse(msg.body)
        _this.greetings.push(message);
      });
   });
  }

  sendMessage(msg: string) {
    this.stompClient.send(
      '/chat/current/resume',
      {},
      JSON.stringify({
        content: msg,
        senderId: localStorage.getItem("userId"),
        senderName: localStorage.getItem("userName"),
        sentAt: Date.now()
      })
    );
  }
}
