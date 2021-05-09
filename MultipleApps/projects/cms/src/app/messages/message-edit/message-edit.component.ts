import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, asNativeElements } from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender: string = "Greg La Plant";

  @ViewChild('subject')subjectRef:ElementRef;
  @ViewChild('msgText')msgTextRef:ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();
  constructor() { }

  ngOnInit(): void {
  }

  onSendMessage(){
  const subjectInput = this.subjectRef.nativeElement.value;
  const msgTxtInput = this.msgTextRef.nativeElement.value;
  const newMessage = new Message("3",subjectInput,msgTxtInput,"Greg La Plant");
  this.addMessageEvent.emit(newMessage)
}

  onClear(){
    const subjectInput = "";
    const msgTxtInput = "";
    const newMessage = new Message("3",subjectInput,msgTxtInput,"Greg La Plant");
    this.addMessageEvent.emit(newMessage)

  }

}
