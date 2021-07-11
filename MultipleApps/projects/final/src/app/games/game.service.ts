import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../games/games.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  selectedGame: Game[];
  games: Game[];
  gameChangedEvent = new Subject<Game[]>();
  collectionChangedEvent = new Subject<Game[]>();
  selectedGameEvent= new Subject<Game[]>();
  constructor(private http: HttpClient) {}

  getGame(id: string) {
    this.http.get('http://localhost:3000/games')
    .subscribe((games: Game[]) => {
      this.games = games;
      this.selectedGame = this.games.filter((game) => game.id === id);
     this.selectedGameEvent.next(this.selectedGame.slice());
     console.log(this.selectedGame)
    });
    
    return this.selectedGame
  }

  getGames(): Game[] {
    this.http.get('http://localhost:3000/games').subscribe((games: Game[]) => {
    this.games = games;
     this.gameChangedEvent.next(this.games.slice());
      console.log(this.games);
    });

    return this.games;
  }

  addGame(game: Game) {
    console.log(game);
    if (!game) {
      return;
    }

    // make sure id of the new Game is empty
    // game.id = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(game);
    // add to database
    this.http
      .post<{ message: string; game: Game }>(
        'http://localhost:3000/collections',
        game,
        { headers: headers }
      )
      .subscribe((responseData) => {
        // add new game to games
        console.log(responseData.game);
        this.games.push(responseData.game);
        this.collectionChangedEvent.next(this.games.slice());
      });
  }
}
