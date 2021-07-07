import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GamesItemComponent } from './games/games-item/games-item.component';
import { GamesDetailComponent } from './games/games-detail/games-detail.component';
import { HttpClientModule } from '@angular/common/http/';
import { HeaderComponent } from './header.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { CollectionItemComponent } from './collection/collection-item/collection-item.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'nes', component: GamesComponent },
  { path: 'supernintendo', component: GamesComponent },
  { path: 'n64', component: GamesComponent },
  { path: 'gameCube', component: GamesComponent },
  { path: 'detail', component: GamesDetailComponent },
  { path: 'collections', component: CollectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GamesListComponent,
    GamesItemComponent,
    GamesDetailComponent,
    HeaderComponent,
    CollectionComponent,
    CollectionListComponent,
    CollectionItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
