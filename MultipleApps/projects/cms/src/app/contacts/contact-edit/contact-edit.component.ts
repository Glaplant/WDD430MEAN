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
  groupContacts: string;

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
}
