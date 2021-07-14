import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../games/games.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  collection: Game[];
  console: string;
  selectedGame: Game[];
  games: Game[];
  gameLength:number;
  gameChangedEvent = new Subject<Game[]>();
  collectionChangedEvent = new Subject<Game[]>();
  selectedGameEvent = new Subject<Game[]>();
  constructor(private http: HttpClient) {}

  getGame(id: number) {
    this.http.get('http://localhost:3000/games').subscribe((games: Game[]) => {
      this.games = games;
      console.log(this.games);
  
      this.selectedGame = this.games.filter((game) => game.id === id);
      console.log(this.selectedGame);
      this.selectedGame.slice();
      console.log(this.selectedGame);
      this.selectedGameEvent.next(this.selectedGame.slice());
   //   return this.selectedGame;
      
    });
    console.log(this.selectedGame);
    return this.selectedGame;
  }

  getGames(path: string): Game[] {
    if (path === 'collections') {
      path = 'nes';
    }

    this.http.get('http://localhost:3000/games').subscribe((games: Game[]) => {
      this.games = games;
      this.gameLength = games.length;
      console.log(this.games);
      this.games = this.games.filter(
        (game) => game.console.toLowerCase().split(" ").join("") === path
      );
      console.log(this.games);
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

    
    console.log(this.games);
    game.id = this.gameLength + 1;
   console.log(this.gameLength + 1);
    // make sure id of the new Game is empty
    // game.id = undefined;
    // console.log(this.games);
    // const pos = this.games.findIndex((d) => d.id === game.id);
    const pos = game.id;

    // console.log(pos);
    // if (pos < 0) {
    //   return;
    // }

    // this.getCollection();
    // console.log(this.collection.length);
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(game);
    // add to database
  //if (this.games.find((game) => !game)) {
    // if(collection){
      this.http
        .post<{ message: string; game: Game }>(
          'http://localhost:3000/games',
          game,
          { headers: headers }
        )
        .subscribe((responseData) => {
          // add new game to games
          console.log(responseData.game);
          this.games.push(responseData.game);
          this.games.splice(pos, 1);
          console.log(this.games);
          this.gameChangedEvent.next(this.games.slice());
        });
  }


  addToCollection(game: Game, collection?: Game[]) {
    console.log(game);
    if (!game) {
      return;
    }

    
    console.log(collection);

    // make sure id of the new Game is empty
    // game.id = '';
    console.log(this.games);
    const pos = this.games.findIndex((d) => d.id === game.id);
    console.log(pos);
    // if (pos < 0) {
    //   return;
    // }

    // this.getCollection();
    // console.log(this.collection.length);
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(game);
    // add to database
  //if (this.games.find((game) => !game)) {
    // if(collection){
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
          this.games.splice(pos, 1);
          console.log(this.games);
          this.collectionChangedEvent.next(this.games.slice());
        });
  }
  // }

  updateGame(originalGame: Game, newGame: Game) {
    if (!originalGame || !newGame) {
      return;
    }

    console.log(originalGame,newGame)
    console.log(this.games)
    const pos = this.games.findIndex((d) => d.id === originalGame.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Document to the id of the old Document
    newGame.id = originalGame.id;
   // newGame.id = originalGame.id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // update database
    this.http
      .put('http://localhost:3000/games/' + originalGame.id, newGame, {
        headers: headers,
      })
      .subscribe((response: Response) => {

        this.games[pos] = newGame;
        console.log(this.games);
        this.games = this.games.filter(function(){
          return true
        })
        console.log(this.games);
        this.gameChangedEvent.next(this.games.slice());
      });
  }
}
