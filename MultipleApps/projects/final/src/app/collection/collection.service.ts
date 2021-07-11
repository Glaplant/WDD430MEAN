import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Collection } from './collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

collections: Collection[] = [];
collectionChangedEvent = new Subject<Collection[]>();
constructor(private http: HttpClient) {}

getCollection(): Collection[] {
  this.http.get('http://localhost:3000/collections').subscribe((collections: Collection[]) => {
    this.collections = collections;
    this.collectionChangedEvent.next(this.collections.slice());
    //  }
    console.log(this.collections);
  });

  return this.collections;
  
}

deleteGame(collection: Collection) {
  if (!collection) {
    return;
  }

  const pos = this.collections.findIndex((d) => d.id === collection.id);

  if (pos < 0) {
    return;
  }

  // delete from database
  this.http
    .delete('http://localhost:3000/collections/' + collection.id)
    .subscribe((response: Response) => {
      this.collections.splice(pos, 1);
      this.collectionChangedEvent.next(this.collections.slice());
    });
}






}