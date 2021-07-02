import { Component, OnInit } from '@angular/core';
import{ NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { __assign } from 'tslib';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit{

  originalContact: Contact;
  contacts: Contact;
  editMode: boolean = false;
  groupContacts: Contact[] = [];
  id:string;
  invalid: boolean = false;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    console.log(this.route.params);
    this.route.params
    .subscribe (
      (params: Params) => {
        console.log(params.id)
         this.id = params.id;
         if (!this.id ){
            this.editMode = false
            return;
          }
         this.originalContact = this.contactService.getContact(this.id);
         console.log(this.originalContact);
         if (!this.originalContact){
             return;
         }
         this.editMode = true
         this.contacts = Object.assign({}, this.originalContact);
         console.log(this.contacts);
   
         if (this.contacts.group) {
           console.log(this.contacts.group);
            this.groupContacts = Object.assign(this.groupContacts, this.contacts.group);
            console.log(this.groupContacts);
         }
    }) 
 }

  

onCancel(){
  this.router.navigate(['/contacts']);
}

onSubmit(form: NgForm){
  const value = form.value;
  console.log(value);
  const newContact = new Contact(value.id, value.name, value.email, value.phone, value.imageUrl, this.groupContacts
    );
  console.log(newContact,newContact.group);
 if(this.editMode){
   this.contactService.updateContact(this.originalContact, newContact)
 }
else{
this.contactService.addContact(newContact)
}
this.router.navigate(['/contacts']);


}



isInvalidContact(newContact: Contact) {
  if (!newContact) {// newContact has no value
    return true;
  }
  if (this.contacts && newContact.id === this.contacts.id) {
     return true;
  }
  for (let i = 0; i < this.groupContacts.length; i++){
     if (newContact.id === this.groupContacts[i].id) {
       return true;
    }
  }
  return false;
}



addToGroup($event: any) {
  console.log($event.dragData)
  const selectedContact: Contact = $event.dragData;
  const invalidGroupContact = this.isInvalidContact(selectedContact);
  if (invalidGroupContact){
    console.log(selectedContact);
    console.log(invalidGroupContact);
    this.invalid = true;
     return;
  }
  this.groupContacts.push(selectedContact);
  this.invalid = false;
}



onRemoveItem(index: number) {
  if (index < 0 || index >= this.groupContacts.length) {
     return;
  }
  this.groupContacts.splice(index, 1);
}



}
