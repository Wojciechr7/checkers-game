import {Injectable} from '@angular/core';
import {Tile} from './classes/tile';
import {Board} from './classes/board';
import {GameSettings} from './settings/game.const';
import {Pawn} from './classes/pawns/pawn';
import {PawnsStatus} from './classes/pawns-status';
import {Index} from './interfaces';
import {Sticking} from './classes/sticking';

@Injectable()
export class AppService {
    public board: Board;
    public clickedFieldType;
    public pawnList: Array<Pawn>;
    public grid: Tile[][];
    private focusedPawn: Pawn;
    private sticker: Sticking;

    constructor() {
        this.board = new Board(GameSettings.H_TILES, GameSettings.V_TILES);
        this.grid = this.board.createTiles();
        this.pawnList = new PawnsStatus().createData();
    }

    public startGame(): void {


    }

    public display(tileIndex: Index, color: string) {
        for (let item of this.pawnList) {
            if (item.comparer(tileIndex, color)) {
                return true;
            }
        }
        return false;
    }

    public tileHoldEvent(tileIndex: Index, event) {
        this.clickedFieldType = this.board.checkField(tileIndex, this.pawnList);

        switch (this.clickedFieldType) {
            case 'black':
                for (const item of this.pawnList) {
                    if (item.comparer(tileIndex, 'black')) {
                        this.focusedPawn = item;
                        this.focusedPawn.move();
                        this.sticker = new Sticking(true, 'black');
                        this.sticker.stickToMouse('black');
                    }
                }
                break;
            case 'white':
                for (const item of this.pawnList) {
                    if (item.comparer(tileIndex, 'white')) {
                        this.focusedPawn = item;
                        this.focusedPawn.move();
                        this.sticker = new Sticking(true, 'white');
                        this.sticker.stickToMouse('white');
                    }
                }
                break;
            case 'green':
                console.log('greeen');
                break;
            default:
                console.log('empty');
                break;
        }
    }

    public dropPawn(tileIndex: Index) {
        if (this.focusedPawn) {
            this.sticker.release();
            this.focusedPawn.changePosition(tileIndex);
            this.focusedPawn.enable();
        }
    }

    public releaseEvent() {
        if (this.focusedPawn) {
            this.sticker.release();
            this.focusedPawn.enable();
        }
    }


}
