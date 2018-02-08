import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgIoModule, NgIoConfig } from 'ng-io';



import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { TileComponent } from './components/tile/tile.component';
import { CheckerComponent } from './components/checker/checker.component';
import { AppService } from './app.service';
import { WhiteCheckerComponent } from './components/white-checker/white-checker.component';
import { BlackCheckerComponent } from './components/black-checker/black-checker.component';
import { ScoreComponent } from './components/score/score.component';
import {CollectionService} from './collection.service';
import { ChatComponent } from './components/chat/chat.component';
import {ChatService} from './components/chat/chat.service';

const config: NgIoConfig = { url: 'http://localhost:3000', options: {} };




@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TileComponent,
    CheckerComponent,
    WhiteCheckerComponent,
    BlackCheckerComponent,
    ScoreComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
      NgIoModule.forRoot(config),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule
  ],
  providers: [AppService, CollectionService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
