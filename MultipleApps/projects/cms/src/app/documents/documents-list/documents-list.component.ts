import { Component, OnInit, Input } from '@angular/core';
import{ Document } from "../document.model";
import { DocumentService } from '../document.service';
@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {

 


  documents: Document[] = [];
  

  constructor(private documentService:DocumentService) {
    this.documents = this.documentService.getDocuments();
   }

  ngOnInit(){
    
    this.documentService.documentChangedEvent
    .subscribe(( documents: Document []) => {
     this.documents = documents;
    })

    }
  }





