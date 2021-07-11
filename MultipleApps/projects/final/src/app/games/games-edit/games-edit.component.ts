import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../games.model';
@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.scss']
})
export class GamesEditComponent implements OnInit {
  @Input() game: Game[];
  id:string;
  console:string;
  price:string;
  genre:string;
  rareness:string;
  release:string;
  name:string;
  //private subscription: Subscription;


  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              //private router: Router
              ) { }

              
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

  );
}
}
