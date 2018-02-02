import { Injectable } from '@angular/core';
import {Tile} from './classes/tile';
import {Board} from './classes/board';
import {GameSettings} from './settings/game.const';

@Injectable()
export class AppService {
  public grid: Tile[][];
  public board: Board;

  constructor() {
      this.grid = [];
      this.board = new Board(GameSettings.H_TILES, GameSettings.V_TILES);
  }

    public startGame(): void {
        this.grid = this.board.createArray();
    }

}
