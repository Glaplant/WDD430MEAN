import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../games.model';
import { GameService } from '../game.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.scss']
})
export class GamesDetailComponent implements OnInit {
  games: Game[];
  id:number;
  console:string;
  price:string;
  genre:string;
  rareness:string;
  release:string;
  name:string;
  private subscription: Subscription;


  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router) { }

              
  ngOnInit(): void {

    this.route.params
    .subscribe( (params: Params) =>{
      this.id = parseInt(params.id);
      console.log(this.id);
      this.games = this.gameService.getGame(this.id);
  });

  
  this.gameService.selectedGameEvent
  .subscribe( (game: Game[]) => {
    console.log(this.games);
  this.games = game;
  this.console = this.games[0].console;
  this.price = this.games[0].price;
  this.name = this.games[0].name;
  this.rareness = this.games[0].rareness;
  this.release = this.games[0].release;
  this.genre = this.games[0].genre;
  console.log(this.games);
  }

  )
   



 



console.log(this.games);
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }






  
}
