import { Component, OnInit, Input } from '@angular/core';
import{ Document }from '../document.model';
import { DocumentsDetailComponent } from '../documents-detail/documents-detail.component';
@Component({
  selector: 'app-documents-item',
  templateUrl: './documents-item.component.html',
  styleUrls: ['./documents-item.component.css']
})
export class DocumentsItemComponent implements OnInit {


  @Input() documents: Document;
  index: string; 
  

  constructor() { }

  ngOnInit(): void {
    this.index = this.documents.id;
  }

}
