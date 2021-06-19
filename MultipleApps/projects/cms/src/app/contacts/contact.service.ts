import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Contact} from'../contacts/contact.model';
// import { MOCKCONTACTS} from './MOCKCONTACTS';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactChangedEvent = new Subject<Contact[]>();
  selectedContactEvent = new Subject<Contact>();
  contacts: Contact[];
  maxContactId: number;
  constructor(private http: HttpClient) {
    // this.contacts = MOCKCONTACTS;
   }

   getContacts():Contact[]{
    this.http.get('https://mean-adc35-default-rtdb.firebaseio.com/contacts.json')
    .subscribe( (contacts: Contact[]) => {
      this.contacts = contacts;
      this.maxContactId = this.getMaxID();
      // this.contacts.sort(function(a,b){
      //   if( a.name > b.name ) return 1;
      //   else if(a.name < b.name) return -1;
      //   return 0 ;
      //  });
     this.contactChangedEvent.next(this.contacts.slice());
   //  }
    console.log(this.contacts);
    
    
   });

  return this.contacts
    //  return this.contacts.slice();

  
  }

  getContact(id:string):Contact{
  const result = this.contacts.filter( contact => contact.id === id);
  console.log(result)
  return result[0] ? result[0] : null;
}


deleteContact(contact: Contact){
  if(!contact){
    return;
  }

  const pos = this.contacts.indexOf(contact);
  if ( pos < 0) {
    return;
  }

  this.contacts.splice(pos,1);
  // this.contactChangedEvent.next(this.contacts.slice());
  this.storeContacts();
}


getMaxID(): number{
  let maxId = 0 ;

  this.contacts.forEach( contact => {
  const currentId = parseInt(contact.id);
  if( currentId > maxId){
    maxId = currentId;
  }

  });

  return maxId
}



addContact( newContact: Contact){
  if (!newContact) return ;

  this.maxContactId++
  newContact.id = String(this.maxContactId);
  this.contacts.push(newContact);
//  const docListCopy = this.documents.slice();
  // this.contactChangedEvent.next( this.contacts.slice());
  this.storeContacts();
}



updateDocument( originalContact: Contact, newContact: Contact){
if ( !originalContact || !newContact) return;

const pos = this.contacts.indexOf(originalContact);
if (pos < 0 ) return;

newContact.id = originalContact.id;
this.contacts[pos] = newContact;
//const documnetListCopy = this.documents.slice();
// this.contactChangedEvent.next(this.contacts.slice());
this.storeContacts();

}


getAltTag(contacts: Contact){
  if(contacts.imageUrl) 
  return contacts.name

}

storeContacts(){
  this.http.put('https://mean-adc35-default-rtdb.firebaseio.com/contacts.json', this.contacts)
  .subscribe( response => {
    this.contactChangedEvent.next(this.contacts.slice());
//console.log(response)
 // this.documentChangedEvent.next(this.documents.slice());
}
  )
}

}
