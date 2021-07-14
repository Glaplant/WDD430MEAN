import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectionService } from '../../collection/collection.service';
import { GameService } from '../game.service';
import { Game } from '../games.model';
import { Collection } from '../../collection/collection.model';


@Component({
  selector: 'app-games-new',
  templateUrl: './games-new.component.html',
  styleUrls: ['./games-new.component.scss']
})
export class GamesNewComponent implements OnInit {

  @Input() game: Game[];
  id:string;
  console:string;
  price:string;
  genre:string;
  rareness:string;
  release:string;
  name:string;
  @Input() games: Game[];
  gamesLength: number;
  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router,
              private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames("nes");
    // this.collectionService.collectionChangedEvent.subscribe(
    //   (collections: Collection[]) => {
    //     this.games = collections;
    //     this.gamesLength = collections.length;
    //   }
    // );
  }

  onSubmit(form:NgForm){
    console.log(form);
    
    const value = form.value;
    const gameConsole = value.console.toLowerCase().split(" ").join("");
    const newGame = new Game(value.id,value.console, value.name,value.rare,value.release,value.price,value.genre);
    console.log(newGame);
    this.gameService.addGame(newGame);
    this.router.navigate([`./${gameConsole}`])
  }

}
