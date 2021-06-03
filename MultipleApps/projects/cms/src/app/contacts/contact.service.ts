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
  
  constructor() {
    this.contacts = MOCKCONTACTS;
   }

   getContacts():Contact[]{
     return this.contacts.slice();

  
  }

  getContact(id:string):Contact{
  const result = this.contacts.filter( contact => contact.id === id);
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

}
