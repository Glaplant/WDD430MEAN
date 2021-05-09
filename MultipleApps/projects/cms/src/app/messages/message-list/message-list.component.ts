import { Component,  OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

    messages: Message[] =[
    new Message('3','Stuff','blahblahblah','Greg'),
    new Message('3','Stuff','blahblahblah','Greg'),
    new Message('3','Stuff','blahblahblah','Greg')

  ];
  
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message){
  this.messages.push(message);
  }
}
