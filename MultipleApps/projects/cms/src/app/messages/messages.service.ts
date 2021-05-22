import { Injectable, EventEmitter } from '@angular/core';
import{ Message } from './message.model'; 
import{ MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageChangedEvent = new EventEmitter<Message[]>();
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
    console.log(this.messages);
    this.messageChangedEvent.emit(this.messages.slice());


  }

  removeMessage(){
    this.messages.pop();
    console.log(this.messages);
    this.messageChangedEvent.emit(this.messages.slice());

  }
}
