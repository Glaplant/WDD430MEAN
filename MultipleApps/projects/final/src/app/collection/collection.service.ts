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
    // this.maxContactId = this.getMaxID();
    // this.contacts.sort(function(a,b){
    //   if( a.name > b.name ) return 1;
    //   else if(a.name < b.name) return -1;
    //   return 0 ;
    //  });
    this.collectionChangedEvent.next(this.collections.slice());
    //  }
    console.log(this.collections);
  });

  return this.collections;
  //  return this.contacts.slice();
}
}