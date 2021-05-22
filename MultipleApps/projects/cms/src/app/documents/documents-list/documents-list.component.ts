import { Component, OnInit } from '@angular/core';
import{ Document } from "../document.model";
import { DocumentService } from '../document.service';
@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {

 


  documents: Document[] = [];


  constructor(private document:DocumentService) { }

  ngOnInit(){
    this.documents = this.document.getDocuments();
  }


onSelectedDocument(document: Document){
  this.document.selectedDocumentEvent.emit(document);
}

}
