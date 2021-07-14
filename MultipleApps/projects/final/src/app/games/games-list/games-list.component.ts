import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from '../game.service';
import { Game } from '../games.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit  {
  @Input() games: Game[];
  path: string;
  private subscription: Subscription;
  private routeSub: Subscription;

  constructor(private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    console.log(this.route.url);
    this.subscription = this.route.url.subscribe((params:Params)=>{
    this.path = params[0].path;
    console.log(this.path);
    this.gameService.getGames(this.path);
    });

    this.subscription = this.gameService.gameChangedEvent.subscribe(
      (games: Game[]) => {
        this.games = games;
      }
    );
  }
  


  newGame(){
    
    this.router.navigate(['./newGame'])
   
  }



}
