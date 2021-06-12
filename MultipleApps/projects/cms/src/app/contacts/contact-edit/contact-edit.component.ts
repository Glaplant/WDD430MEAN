import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  originalContact: Contact;
  contact: Contact;
  editMode: boolean = false;
  groupContacts: Contact[];

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

  }

onCancel(){
  this.router.navigate(['/contact']);
}

onSubmit(form: NgForm){
  console.log(form);
}

isInvalidContact(newContact:Contact){
  if(!newContact){
    return true;
  }
  if(this.contact && newContact.id === this.contact.id){
    return true;
  }
  for(let i = 0; i < this.groupContacts.length; i++){
    if(newContact.id === this.groupContacts[i].id){
      return true;
    }
  }
return false;
}


addToGroup($event: any) {
  const selectedContact: Contact = $event.dragData;
  const invalidGroupContact = this.isInvalidContact(selectedContact);
  if (invalidGroupContact){
     return;
  }
  this.groupContacts.push(selectedContact);
}



onRemoveItem(index: number) {
  if (index < 0 || index >= this.groupContacts.length) {
     return;
  }
  this.groupContacts.splice(index, 1);
}

}
