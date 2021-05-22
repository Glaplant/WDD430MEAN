import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Message} from '../message.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
 currentSender: string = "3";

  @ViewChild('subject',{static: true}) subjectRef: ElementRef;
  @ViewChild('msgTxt',{static: true}) msgTextRef: ElementRef;

  // addMessageEvent = new EventEmitter<{id:string,subject:string,msgText:string,sender:string}>();
  constructor(private messagesService : MessagesService) { }

  ngOnInit(): void {
  }

  
  onSendMessage(){

const subject = this.subjectRef.nativeElement.value;
const messageTxt = this.msgTextRef.nativeElement.value;
const sender = this.currentSender;
const message = new Message (sender,subject,messageTxt,sender);
console.log(message);
this.messagesService.addMessage(message);
  
 
 
  }

  onClear(){
   
    this.messagesService.removeMessage();
 

}
}

