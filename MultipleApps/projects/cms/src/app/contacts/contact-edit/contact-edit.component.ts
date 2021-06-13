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
  groupContacts: Contact[] = [];
  id:string;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.route.params
    .subscribe (
      (params: Params) => {
        console.log(params.id)
         this.id = params.id
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
         this.contact = JSON.parse(JSON.stringify(this.originalContact));
         console.log(this.contact);
   
         if (this.contact.group) {
            this.groupContacts = JSON.parse(JSON.stringify(this.contact.group));
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
  const newContact = new Contact(value.id, value.name, value.email, value.phone, value.imageUrl, value.group
    );
  console.log(newContact);
 if(this.editMode){
   this.contactService.updateDocument(this.originalContact, newContact)
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
  if (this.contact && newContact.id === this.contact.id) {
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
