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
  @Input() game: Game[];
  id:string;
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
      this.id = params['id'];
      console.log(this.id);
      this.game = this.gameService.getGame(this.id);
  });

  
  this.gameService.selectedGameEvent
  .subscribe( (game: Game[]) => {
  this.game = game;
  this.console = this.game[0].console;
  this.price = this.game[0].price;
  this.name = this.game[0].name;
  this.rareness = this.game[0].rareness;
  this.release = this.game[0].release;
  this.genre = this.game[0].genre;
  
  }

  )
   



 



console.log(this.game);
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }






  
}
