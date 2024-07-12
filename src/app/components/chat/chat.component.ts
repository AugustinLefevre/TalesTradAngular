import { Component } from '@angular/core';
import { ChatService } from '../../services/chat-service/chat.service';
import { Message } from '../../models/message.model';
import { MessageService } from '../../services/message-service/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  greetings: Message[] = [];
  disabled = true;
  newmessage!: string;

  constructor(private chatService: ChatService, private messageService: MessageService){
  }

  isActualUser(id: string|null) {
    return this.chatService.isActualUser(id);
  }

  ngOnInit() {
    
    /*this.messageService.getMessage().subscribe(datas =>{
      this.greetings = datas; 
      console.log("ELEMENT:" + JSON.stringify(this.greetings))
    });*/
    this.chatService.connect();
    this.greetings = this.chatService.greetings;
    if(this.greetings.length == 0){
      this.messageService.getMessage().subscribe(datas =>{
        this.greetings.push(...datas); 
        //console.log("ELEMENT:" + JSON.stringify(this.greetings))
      });
    }
    
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;
    if (connected) {
      this.greetings = [];
    }
  }
  
  sendMessage() {
    this.chatService.sendMessage(this.newmessage);
    this.newmessage = "";
  }
}
