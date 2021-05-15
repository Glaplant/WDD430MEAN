import { Component, OnInit, Input } from '@angular/core';
import{ Document }from '../document.model';
@Component({
  selector: 'app-documents-item',
  templateUrl: './documents-item.component.html',
  styleUrls: ['./documents-item.component.css']
})
export class DocumentsItemComponent implements OnInit {


  @Input() documents: Document;
  constructor() { }

  ngOnInit(): void {
  }

}
