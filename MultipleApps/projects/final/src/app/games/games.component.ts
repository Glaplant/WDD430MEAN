import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GameService } from './game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor( private route: ActivatedRoute,
                private gamesService: GameService) { }

  ngOnInit(): void {

    // console.log(this.route.url);
    // this.route.url.subscribe((params:Params)=>{
    // const path = params[0].path;
    // console.log(path);
    // this.gamesService.getGames(path);
   }
// );

}
// }
