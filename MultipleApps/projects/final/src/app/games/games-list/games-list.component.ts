import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../game.service';
import { Game } from '../games.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit , OnDestroy {
  games: Game[];
  private subscription: Subscription;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.games = this.gameService.getGames();
    this.subscription = this.gameService.gameChangedEvent.subscribe(
      (games: Game[]) => {
        this.games = games;
      }
    );
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();

  }



}
