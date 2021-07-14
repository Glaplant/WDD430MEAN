import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../games.model'
import { GameService } from '../game.service';
import {  Router } from '@angular/router';
import { CollectionService } from '../../collection/collection.service';


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
  id:number;

  index: number;
  collection:any;
  
  

  constructor(private gameService: GameService,
    private collectionService: CollectionService,
              private router: Router) { }

  ngOnInit(): void {
console.log(this.games);
    if(this.games){
    this.name = this.games.name;
    this.price = this.games.price;
    this.rareness = this.games.rareness;
    this.id = this.games.id;
    this.index = this.id;
    }
    
    // this.collectionService.collectionChangedEvent.subscribe( game => {
    //   this.collection = game })
   
  }



  addToCollectionList(){
    if(this.games){
   this.gameService.addToCollection(this.games);
    }
  //  console.log(this.collection)

    
  }

  gameDetailRoute(){
    const gameConsole = this.games.console.toLocaleLowerCase().split(" ").join("");
    this.router.navigate([`./${gameConsole}/${this.games.id}`]);
  }

 
}


