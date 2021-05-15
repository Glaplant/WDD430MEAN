import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ Document } from "../document.model";
@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();


  documents: Document[] =[
   new Document ("1","George","blahblahblah","https://www.stuff.com"),
   new Document ("2","Greg","blahblahblah","https://www.stuff.com"),
   new Document ("3","John","blahblahblah","https://www.stuff.com"),
   new Document ("4","Ruth","blahblahblah","https://www.stuff.com"),
   new Document ("5","Emily","blahblahblah","https://www.stuff.com"),
    ];

  constructor() { }

  ngOnInit(): void {
  }


onSelectedDocument(document: Document){
  this.selectedDocumentEvent.emit(document);
}

}
