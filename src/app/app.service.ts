import {Injectable} from '@angular/core';
import {Tile} from './classes/tile';
import {Board} from './classes/board';
import {GameSettings} from './settings/game.const';
import {Pawn} from './classes/pawns/pawn';
import {PawnsStatus} from './classes/pawns-status';
import {Index} from './interfaces';
import {Sticking} from './classes/sticking';
import * as $ from 'jquery';
import {Move} from './classes/moves/move';
import {PossibleMove} from './classes/moves/possible-move';
import {PossibleAttack} from './classes/moves/possible-attack';

@Injectable()
export class AppService {
    public board: Board;
    public clickedFieldType;
    public pawnList: Array<Pawn>;
    public grid: Tile[][];
    private focusedPawn: Pawn;
    private sticker: Sticking;
    private moves: Move;

    constructor() {
        this.board = new Board(GameSettings.H_TILES, GameSettings.V_TILES);
        this.grid = this.board.createTiles();
        this.pawnList = new PawnsStatus().createData();
        this.moves = new PossibleMove();
    }

    public startGame(): void {


    }

    public display(tileIndex: Index, color: string) {
        for (let item of this.pawnList) {
            if (item.comparePawns(tileIndex, color)) {
                return true;
            }
        }
        return false;
    }

    public pickUpPawn(tileIndex: Index, event) {
        console.log(tileIndex);
        this.clickedFieldType = this.board.checkField(tileIndex, this.pawnList);

        if (this.clickedFieldType === 'white' || this.clickedFieldType === 'black') {
            for (const item of this.pawnList) {
                if (item.comparePawns(tileIndex, this.clickedFieldType)) {
                    this.moves = new PossibleAttack();
                    if (this.clickedFieldType === 'black')
                        this.moves.generatePossibleMoves(tileIndex, '-', this.pawnList);
                    else this.moves.generatePossibleMoves(tileIndex, '+', this.pawnList);

                    this.moves = new PossibleMove();
                    if (this.clickedFieldType === 'black')
                        this.moves.generatePossibleMoves(tileIndex, '-', this.pawnList);
                    else this.moves.generatePossibleMoves(tileIndex, '+', this.pawnList);
                    this.focusedPawn = item;
                    this.focusedPawn.move(tileIndex);
                    this.sticker = new Sticking(true, this.clickedFieldType);
                    this.sticker.stickToMouse(this.clickedFieldType, this.focusedPawn);
                }
            }
        }
    }

    public dropPawn(tileIndex: Index) {
        if (this.focusedPawn) {
            this.sticker.release();
            this.focusedPawn.changePosition(tileIndex);
            this.focusedPawn.enable();
            this.moves.possibleMoves = [];
        }
    }

    public releaseEvent() {
        if (this.focusedPawn) {
            this.sticker.release();
            this.focusedPawn.enable();
            this.moves.possibleMoves = [];
        }
    }



}
