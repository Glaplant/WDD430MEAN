import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import{ Message } from './message.model'; 
import{ MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageChangedEvent = new Subject<Message[]>();
  messages: Message[];

  constructor() { 
    this.messages = MOCKMESSAGES;
  }

  getMessages():Message[]{
    return this.messages.slice();

  }

  getMessage(id:string):Message{
  const result = this.messages.filter( message => message.id === id);
  return result[0];
  }

  addMessage(message:Message){
    this.messages.push(message);
    //console.log(this.messages);
    this.messageChangedEvent.next(this.messages.slice());


  }

  removeMessage(){
    this.messages.pop();
    console.log(this.messages);
    this.messageChangedEvent.next(this.messages.slice());

  }
}
