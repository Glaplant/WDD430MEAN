import { Component, Input, OnInit} from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contacts: Contact;
  id: string;
  index: string;
  name: string;
  altDescription: string;
  
  // @Output() selectedContactEvent = new EventEmitter<void>();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    console.log(this.contacts)
  this.index = this.contacts.id;
  this.name = this.contacts.name;
  
  
console.log(this.contacts.imageUrl)
console.log(this.contacts.imageUrl.length);
this.altDescription = this.contactService.getAltTag(this.contacts)
 // if(this.contacts.imageUrl.length <= 1 || !this.contacts.imageUrl) this.altDescription = "";

  
  
 
  


 
  
  }



 

  

}
