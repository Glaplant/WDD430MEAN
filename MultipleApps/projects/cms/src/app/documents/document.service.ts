import { Injectable,EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documentChangedEvent = new EventEmitter<Document[]>();
  selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[];

  constructor() {
    this.documents = MOCKDOCUMENTS;
   }

   getDocuments():Document[]{
    return this.documents.slice();
   }

   getDocument(id:string):Document{
    const result = this.documents.filter( document => document.id === id);
    return result[0] ? result[0] : null;
  }

  deleteDocument(document: Document){
    if(!document){
      return;
    }

  const pos = this.documents.indexOf(document);
  if (pos < 0) {
     return;
  }
  this.documents.splice(pos, 1);
  this.documentChangedEvent.emit(this.documents.slice());
}

  
}
