import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { TileComponent } from './components/tile/tile.component';
import { CheckerComponent } from './components/checker/checker.component';
import { AppService } from './app.service';
import { WhiteCheckerComponent } from './components/white-checker/white-checker.component';
import { BlackCheckerComponent } from './components/black-checker/black-checker.component';
import { ScoreComponent } from './components/score/score.component';
import {CollectionService} from './collection.service';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TileComponent,
    CheckerComponent,
    WhiteCheckerComponent,
    BlackCheckerComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule
  ],
  providers: [AppService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
