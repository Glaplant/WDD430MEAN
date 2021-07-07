import { Component, Input, OnInit } from '@angular/core';
import { Collection } from'../collection.model';
import { CollectionService } from '../collection.service';
@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {
  @Input() collections: Collection;
  name: string;
  price: string;
  rareness: string;  
  
  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.name = this.collections.name;
    this.price = this.collections.price;
    this.rareness = this.collections.rareness;
  }

}
