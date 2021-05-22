import { Injectable, EventEmitter } from '@angular/core';
import { Contact} from'../contacts/contact.model';
import { MOCKCONTACTS} from './MOCKCONTACTS';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  selectedContactEvent = new EventEmitter<Contact>();
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

}
