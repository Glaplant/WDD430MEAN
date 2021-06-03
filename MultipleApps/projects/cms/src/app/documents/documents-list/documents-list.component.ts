import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import{ Document } from "../document.model";
import { DocumentService } from '../document.service';
@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit, OnDestroy {

 


  documents: Document[] = [];
  private subscription: Subscription;
  

  constructor(private documentService:DocumentService) {
    this.documents = this.documentService.getDocuments();
   }

  ngOnInit(){
    
    this.subscription = this.documentService.documentChangedEvent
    .subscribe(( documents: Document []) => {
     this.documents = documents;
    })

    }

ngOnDestroy(){
  this.subscription.unsubscribe();
}

  }





