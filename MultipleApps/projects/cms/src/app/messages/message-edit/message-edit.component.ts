import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender: string = "Greg La Plant";

  @ViewChild('subject',{static: true}) subjectRef: ElementRef;
  @ViewChild('msgTxt',{static: true}) msgTextRef: ElementRef;

  @Output() addMessageEvent = new EventEmitter<{id:string,subject:string,msgText:string,sender:string}>();
  constructor() { }

  ngOnInit(): void {
  }

  
  onSendMessage(){

const subject = this.subjectRef.nativeElement.value;
const message = this.msgTextRef.nativeElement.value;
const sender = this.currentSender;
this.addMessageEvent.emit({id:"3",subject:subject,msgText:message,sender:sender});
  
  
 
 
  }

  onClear(){
    // this.addMessageEvent.emit({
    //   id:"",
    //   subjectInput: "",
    //   msgInput: "",
    //   sender:""
   
   
    // });

}
}

