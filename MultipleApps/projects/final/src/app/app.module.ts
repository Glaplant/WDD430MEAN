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
import { GamesEditComponent } from './games/games-edit/games-edit.component';
// const appRoutes: Routes = [
//   { path: '', component: CollectionComponent },
//   { path: 'nes', component: GamesComponent },
//   { path: 'supernintendo', component: GamesComponent },
//   { path: 'n64', component: GamesComponent },
//   { path: 'gameCube', component: GamesComponent },
//   { path: 'detail/:id', component: GamesDetailComponent },
//   { path: 'collections', component: CollectionComponent },
//   { path: 'games/:console', component: GamesComponent },
//   { path: 'edit/:id', component: GamesEditComponent },

// ];

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
    GamesEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   // RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
