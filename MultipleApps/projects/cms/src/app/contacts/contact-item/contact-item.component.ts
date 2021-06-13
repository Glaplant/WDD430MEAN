import { Component, Input, OnInit} from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contacts: Contact;
  id: string;
  index: string;
  // @Output() selectedContactEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  this.index = this.contacts.id;
  }

  

}
