import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

 
    contacts: Contact[] = [];
  constructor(private contact:ContactService ) { }

  ngOnInit(){
    this.contacts = this.contact.getContacts();
  }

  onSelected(contact: Contact){
  this.contact.selectedContactEvent.emit(contact);
  }

}
