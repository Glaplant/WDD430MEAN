import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import{ Message } from './message.model'; 
// import{ MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageChangedEvent = new Subject<Message[]>();
  messages: Message[];
  maxMessageId: number;

  constructor( private http: HttpClient) { 
    // this.messages = MOCKMESSAGES;
  }

  getMessages():Message[]{
   // return this.messages.slice();
   this.http.get('http://localhost:3000/messages')
   .subscribe( (messages: Message[]) => {
     this.messages = messages;
     this.maxMessageId = this.getMaxId();
    //  this.messages.sort(function(a,b){
    //    if( a.name > b.name ) return 1;
    //    else if(a.name < b.name) return -1;
    //    return 0 ;
    //   });
    this.messageChangedEvent.next(this.messages.slice());
  //  }
   console.log(this.messages);
   
   
  });

  return this.messages
   

  }

  

  getMessage(id:string):Message{
  const result = this.messages.filter( message => message.id === id);
  return result[0];
  }

  addMessage(message:Message){
    if (!message) {
      return;
    }

    message.id=""
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post<{  message: Message }>('https://localhost:3000/documents',
      document,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new document to documents
          this.messages.push(responseData.message);
          this.messageChangedEvent.next(this.messages.slice());
        }
      );
      }
      
  removeMessage(){
    this.messages.pop();
    console.log(this.messages);
    this.storeMessages();

  }

 
  getMaxId(): number{
    let maxId = 0 ;

    this.messages.forEach( message => {
    const currentId = parseInt( message.id);
    if( currentId > maxId){
      maxId = currentId;
    }

    });

    return maxId
  }

 

  storeMessages(){
    this.http.put('http://localhost:3000/messages', this.messages)
    .subscribe( response => {
      this.messageChangedEvent.next(this.messages.slice());
  //console.log(response)
   // this.documentChangedEvent.next(this.documents.slice());
  }
    )
  }

}
