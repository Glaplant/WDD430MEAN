import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Contact } from '../contacts/contact.model';
// import { MOCKCONTACTS} from './MOCKCONTACTS';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactChangedEvent = new Subject<Contact[]>();
  selectedContactEvent = new Subject<Contact>();
  contacts: Contact[];
  maxContactId: number;
  constructor(private http: HttpClient) {
    // this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    this.http
      .get('http://localhost:3000/contacts')
      .subscribe((contacts: Contact[]) => {
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

    return this.contacts;
    //  return this.contacts.slice();
  }

  getContact(id: string): Contact {
    const result = this.contacts.filter((contact) => contact.id === id);
    console.log(result);
    return result[0] ? result[0] : null;
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }

    const pos = this.contacts.findIndex((d) => d.id === contact.id);

    if (pos < 0) {
      return;
    }

    // delete from database
    this.http
      .delete('http://localhost:3000/contacts/' + contact.id)
      .subscribe((response: Response) => {
        this.contacts.splice(pos, 1);
        this.contactChangedEvent.next(this.contacts.slice());
      });
  }

  getMaxID(): number {
    let maxId = 0;

    this.contacts.forEach((contact) => {
      const currentId = parseInt(contact.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    });

    return maxId;
  }

  addContact(contact: Contact) {
    if (!contact) {
      return;
    }

    // make sure id of the new Document is empty
    contact.id = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // add to database
    this.http
      .post<{ message: string; contact: Contact }>(
        'http://localhost:3000/contacts',
        contact,
        { headers: headers }
      )
      .subscribe((responseData) => {
        // add new document to documents
        this.contacts.push(responseData.contact);
        console.log(this.contacts);
        this.contactChangedEvent.next(this.contacts.slice());
      });
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }

    const pos = this.contacts.findIndex((d) => d.id === originalContact.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Document to the id of the old Document
    newContact.id = originalContact.id;
    newContact.id = originalContact.id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // update database
    this.http
      .put('http://localhost:3000/contacts/' + originalContact.id, newContact, {
        headers: headers,
      })
      .subscribe((response: Response) => {
        this.contacts[pos] = newContact;
        this.contactChangedEvent.next(this.contacts.slice());
      });
  }

  getAltTag(contacts: Contact) {
    if (contacts.imageUrl) return contacts.name;
  }

  storeContacts() {
    this.http
      .put('http://localhost:3000/contacts', this.contacts)
      .subscribe((response) => {
        this.contactChangedEvent.next(this.contacts.slice());
        //console.log(response)
        // this.documentChangedEvent.next(this.documents.slice());
      });
  }
}
