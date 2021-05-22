import { Component,  OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

    messages: Message[] = [];
  
  
  constructor(private message:MessagesService) { }

  ngOnInit(){
    this.messages = this.message.getMessages();
    this.message.messageChangedEvent
    .subscribe( (messages : Message[]) => {
      this.messages = messages;
    }
    );
    
  }

  // onAddMessage(message: Message){
  // this.messages.push(message);
  // this.messageChangedEvent.emit(this.messages.slice());
  // }
}
