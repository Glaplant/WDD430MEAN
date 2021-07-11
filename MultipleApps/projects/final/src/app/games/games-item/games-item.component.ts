import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../games.model'
import { GameService } from '../game.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.scss']
})
export class GamesItemComponent implements OnInit{

  @Input() games: Game;
  name: string;
  price: string;
  rareness: string;
  id:string;
  game: Game[];
  index: string;
  
  

  constructor(private gameService: GameService,
              private router: Router) { }

  ngOnInit(): void {
    this.name = this.games.name;
    this.price = this.games.price;
    this.rareness = this.games.rareness;
    this.id = this.games.id;
    this.index = this.id;
    
  //  this.subscription = this.gameService.collectionChangedEvent.subscribe( game => {
  //     this.game = game })
    // console.log(this.route.params);
  }



  addToCollectionList(){
    // this.gameService.getGame(this.id);
    this.gameService.addGame(this.games);

   console.log(this.games)

    
  }

  gameDetailRoute(){
    const console = this.games.console.toLocaleLowerCase();
    this.router.navigate([`./${console}/${this.games.id}`]);
  }

 
}


