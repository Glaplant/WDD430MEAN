import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { CollectionItemComponent } from './collection/collection-item/collection-item.component';
import { GamesEditComponent } from './games/games-edit/games-edit.component';
import { GamesComponent } from './games/games.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GamesItemComponent } from './games/games-item/games-item.component';
import { GamesDetailComponent } from './games/games-detail/games-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/collections', pathMatch: 'full'},
  { path: 'nes', component: GamesComponent, children:[
    { path: ':id', component: GamesDetailComponent },
    { path: ':id/edit', component: GamesEditComponent },
  
  ]},
  { path: 'supernintendo', component: GamesComponent, children:[
    { path: ':id', component: GamesDetailComponent },
    { path: ':id/edit', component: GamesEditComponent },
  
  ]},
  { path: 'n64', component: GamesComponent, children:[
    { path: ':id', component: GamesDetailComponent },
    { path: ':id/edit', component: GamesEditComponent },
  
  ]},
  { path: 'gameCube', component: GamesComponent, children:[
    { path: ':id', component: GamesDetailComponent },
    { path: ':id/edit', component: GamesEditComponent },
  
  ]},
  
  { path: 'collections', component: CollectionListComponent, children:[
    { path: ':id', component: GamesDetailComponent },
    { path: ':id/edit', component: GamesEditComponent },
    ] },
  //{ path: 'games/:console', component: GamesComponent },
  // { path: ':id/edit', component: GamesEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
