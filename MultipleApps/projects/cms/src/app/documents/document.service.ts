import { Injectable,EventEmitter } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documentChangedEvent = new Subject<Document[]>();
  selectedDocumentEvent = new Subject<Document>();
  documents: Document[];
  maxDocumentId: number;

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxID();
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
  this.documentChangedEvent.next(this.documents.slice());
}



getMaxID(): number{
  let maxId = 0 ;

  this.documents.forEach( document => {
  const currentId = parseInt(document.id);
  if( currentId > maxId){
    maxId = currentId;
  }

  });

  return maxId
}



addDocument( newDocument: Document){
  if (!newDocument) return ;

  this.maxDocumentId++
  newDocument.id = String(this.maxDocumentId);
  this.documents.push(newDocument);
//  const docListCopy = this.documents.slice();
  this.documentChangedEvent.next( this.documents.slice());
}



updateDocument( originalDocument: Document, newDocument: Document){
if ( !originalDocument || !newDocument) return;

const pos = this.documents.indexOf(originalDocument);
if (pos < 0 ) return;

newDocument.id = originalDocument.id;
this.documents[pos] = newDocument;
//const documnetListCopy = this.documents.slice();
this.documentChangedEvent.next(this.documents.slice());

}



  
}
