import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection.model';
import { Subscription } from 'rxjs';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit {

  collections: Collection[];
  private subscription: Subscription;
  
  constructor(private collectionService: CollectionService) {}


  ngOnInit(): void {
  
  this.collections = this.collectionService.getCollection();
  this.subscription = this.collectionService.collectionChangedEvent.subscribe(
    (collections: Collection[]) => {
      this.collections = collections;
    }
  );
}
}
