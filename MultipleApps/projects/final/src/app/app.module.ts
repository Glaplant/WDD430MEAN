import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GamesItemComponent } from './games/games-item/games-item.component';
import { GamesDetailComponent } from './games/games-detail/games-detail.component';
import { HeaderComponent } from './header.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionListComponent } from './collection/collection-list/collection-list.component';
import { CollectionItemComponent } from './collection/collection-item/collection-item.component';
// import { RouterModule, Routes } from '@angular/router';
import { GamesEditComponent } from './games/games-edit/games-edit.component';
import { GamesNewComponent } from './games/games-new/games-new.component';



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
    GamesNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   // RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
