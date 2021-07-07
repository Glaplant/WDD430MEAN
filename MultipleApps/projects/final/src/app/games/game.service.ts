import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../games/games.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  games: Game[];
  gameChangedEvent = new Subject<Game[]>();
  constructor(private http: HttpClient) {}

  getGames(): Game[] {
    this.http.get('http://localhost:3000/games').subscribe((games: Game[]) => {
      this.games = games;
      // this.maxContactId = this.getMaxID();
      // this.contacts.sort(function(a,b){
      //   if( a.name > b.name ) return 1;
      //   else if(a.name < b.name) return -1;
      //   return 0 ;
      //  });
      this.gameChangedEvent.next(this.games.slice());
      //  }
      console.log(this.games);
    });

    return this.games;
    //  return this.contacts.slice();
  }
}
