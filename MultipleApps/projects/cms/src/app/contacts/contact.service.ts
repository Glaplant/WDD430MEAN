import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { Contact} from'../contacts/contact.model';
import { MOCKCONTACTS} from './MOCKCONTACTS';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactChangedEvent = new Subject<Contact[]>();
  selectedContactEvent = new Subject<Contact>();
  contacts: Contact[];
  maxContactId: number;
  constructor() {
    this.contacts = MOCKCONTACTS;
   }

   getContacts():Contact[]{
     return this.contacts.slice();

  
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
  this.contactChangedEvent.next(this.contacts.slice());

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
  this.contactChangedEvent.next( this.contacts.slice());
}



updateDocument( originalContact: Contact, newContact: Contact){
if ( !originalContact || !newContact) return;

const pos = this.contacts.indexOf(originalContact);
if (pos < 0 ) return;

newContact.id = originalContact.id;
this.contacts[pos] = newContact;
//const documnetListCopy = this.documents.slice();
this.contactChangedEvent.next(this.contacts.slice());

}


getAltTag(contacts: Contact){
  if(contacts.imageUrl.length <= 1 || !contacts.imageUrl) {
  return '';
}
return contacts.name

}

}
