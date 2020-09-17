import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  conversation = new Subject<Message[]>();
  constructor() { }

  messageMap = {
    "Hi": "Hello",
    "Who are you": "My name is Sahayam, How may I help you",
    "What is Angular": "Angular is the best framework ever",
    "default": "I can't understand. Can you please repeat"
  }

  getBotAnswer(msg: any) {
    const userMessage = new Message('user', msg);  
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }

}
