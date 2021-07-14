import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from '../game.service';
import { Game } from '../games.model';
@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.scss']
})
export class GamesEditComponent implements OnInit, OnDestroy {
  game: Game[];
  id:number;
  console:string;
  price:string;
  genre:string;
  rareness:string;
  release:string;
  name:string;
  private subscription: Subscription;
  private routeSub: Subscription;


  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

              
  ngOnInit(): void {

    this.routeSub = this.route.params
    .subscribe( (params: Params) =>{
      this.id = parseInt(params.id);
      console.log(this.id);
      this.game = this.gameService.getGame(this.id);
      console.log(this.game)
  });

  
  this.subscription = this.gameService.selectedGameEvent
  .subscribe( (game: Game[]) => {
    console.log(game);
  this.game = game;
  this.console = this.game[0].console;
  this.price = this.game[0].price;
  this.name = this.game[0].name;
  this.rareness = this.game[0].rareness;
  this.release = this.game[0].release;
  this.genre = this.game[0].genre;
  
  }

  );
}

onSubmit(form:NgForm){
  console.log("What" , form);
  const value = form.value;
  const newGame = new Game(value.id,value.console, value.name,value.rare,value.release,value.price,value.genre);
  console.log(newGame);
  const gameConsole = value.console.toLowerCase().split(" ").join("");
  this.gameService.updateGame(this.game[0],newGame);
  this.router.navigate([`./${gameConsole}`]);
  
}

ngOnDestroy(){
  this.subscription.unsubscribe();
  this.routeSub.unsubscribe();

}
}
