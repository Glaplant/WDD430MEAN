import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Document } from './document.model';
import { Subject } from 'rxjs';

interface Response {
  message: string,
  documents: Document []
}



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
     this.http.get('http://localhost:3000/documents')
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


  deleteDocument(document: Document) {

    if (!document) {
      return;
    }

    const pos = this.documents.findIndex(d => d.id === document.id);

    if (pos < 0) {
      return;
    }

    // delete from database
    this.http.delete('https://localhost:3000/documents/' + document.id)
      .subscribe(
        (response: Response) => {
          this.documents.splice(pos, 1);
          this.documentChangedEvent.next(this.documents.slice());
        }
      );
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



  addDocument(document: Document) {
    if (!document) {
      return;
    }

    // make sure id of the new Document is empty
    document.id = '';

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // add to database
    this.http.post<{ message: string, document: Document }>('https://localhost:3000/documents',
      document,
      { headers: headers })
      .subscribe(
        (responseData) => {
          // add new document to documents
          this.documents.push(responseData.document);
          this.documentChangedEvent.next(this.documents.slice());
        }
      );
  }




  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }

    const pos = this.documents.findIndex(d => d.id === originalDocument.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Document to the id of the old Document
    newDocument.id = originalDocument.id;
    newDocument.id = originalDocument.id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/documents/' + originalDocument.id,
      newDocument, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.documents[pos] = newDocument;
          this.documentChangedEvent.next(this.documents.slice());
        }
      );
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
