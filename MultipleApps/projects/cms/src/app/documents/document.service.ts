import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Document } from './document.model';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documentChangedEvent = new Subject <Document[]> ();
  selectedDocumentEvent = new Subject <Document> ();
  documents: Document[] = [];
  maxDocumentId: number;

  constructor(private http: HttpClient) {
    // this.documents = MOCKDOCUMENTS;
    // this.maxDocumentId = this.getMaxID();
  }


  getDocuments():Document[]{
     this.http.get('https://mean-adc35-default-rtdb.firebaseio.com/documents.json')
     .subscribe( (documents: Document[]) => {
       this.documents = documents;
       this.maxDocumentId = this.getMaxId();
       this.documents.sort(function(a,b){
         if( a.name > b.name ) return 1;
         else if(a.name < b.name) return -1;
         return 0 ;
        });
      this.documentChangedEvent.next(this.documents.slice());
    //  }
     console.log(this.documents);
     
     
    });

    return this.documents
     
  
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
  // this.documentChangedEvent.next(this.documents.slice());
  this.storeDocuments();
  }



  getMaxId(): number{
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
    // this.documentChangedEvent.next( this.documents.slice());
    this.storeDocuments();
  }



  updateDocument( originalDocument: Document, newDocument: Document){
    if ( !originalDocument || !newDocument) return;

    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0 ) return;

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    //const documnetListCopy = this.documents.slice();
   // this.documentChangedEvent.next(this.documents.slice());
    this.storeDocuments();

  }


  storeDocuments(){
    this.http.put('https://mean-adc35-default-rtdb.firebaseio.com/documents.json', this.documents)
    .subscribe( response => {
      this.documentChangedEvent.next(this.documents.slice());
//console.log(response)
   // this.documentChangedEvent.next(this.documents.slice());
  }
    )
  }
  
}
