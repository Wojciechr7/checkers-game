import { Injectable } from '@angular/core';
import {Tile} from './classes/tile';
import {Board} from './classes/board';
import {GameSettings} from './settings/game.const';
import {Pawn} from './classes/pawns/pawn';

@Injectable()
export class AppService {
  public board: Board;


  constructor() {

      this.board = new Board(GameSettings.H_TILES, GameSettings.V_TILES);
  }

    public startGame(): void {


    }


}
