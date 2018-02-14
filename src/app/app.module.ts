import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgIoModule, NgIoConfig } from 'ng-io';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';



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


const config: NgIoConfig = { url: 'https://ng-checkers-game.herokuapp.com/', options: {} };

export class CustomHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'pinch': { enable: false },
        'rotate': { enable: false }
    };
}


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
  providers: [AppService, CollectionService, ChatService, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
