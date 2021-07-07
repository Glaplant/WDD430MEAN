import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../games.model'
import { GameService } from '../game.service';
@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.scss']
})
export class GamesItemComponent implements OnInit {

  @Input() games: Game;
  name: string;
  price: string;
  rareness: string;
  
  

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.name = this.games.name;
    this.price = this.games.price;
    this.rareness = this.games.rareness;
  }



  addToList(){
    console.log("click")
  }
}


