import {Injectable} from '@angular/core';
import {Tile} from './classes/tile';
import {Board} from './classes/board';
import {GameSettings, PlayerSettings} from './settings/game.const';
import {Pawn} from './classes/pawns/pawn';
import {PawnsStatus} from './classes/pawns-status';
import {Index} from './interfaces';
import {Sticking} from './classes/sticking';
import * as $ from 'jquery';
import {Move} from './classes/moves/move';
import {PossibleMove} from './classes/moves/possible-move';
import {PossibleAttack} from './classes/moves/possible-attack';
import {Game} from './classes/game';

@Injectable()
export class AppService {
    public board: Board;
    public clickedFieldType;
    public pawnList: Array<Pawn>;
    public grid: Tile[][];
    private focusedPawn: Pawn;
    private sticker: Sticking;
    private moves: Move;
    private beforeAttackPosition: Index;
    public game: Game;
    private pickedUp: boolean;

    constructor() {
        this.board = new Board(GameSettings.H_TILES, GameSettings.V_TILES);
        this.grid = this.board.createTiles();
        this.pawnList = new PawnsStatus().createData();
        this.moves = new PossibleMove();

    }

    public startGame(): void {
        this.game = new Game();
    }

    public pickUpPawn(tileIndex: Index, event) {
        console.log(tileIndex);
        let pawnNumber: number;
        this.clickedFieldType = this.board.checkField(tileIndex, this.pawnList);
        pawnNumber = (this.clickedFieldType === 'white') ? 1 : 0;

        if (pawnNumber === this.game.actualPlayer) {
            for (const item of this.pawnList) {
                if (item.comparePawns(tileIndex, this.clickedFieldType)) {
                    this.moves = new PossibleAttack();
                    this.moves.generatePossibleMoves(tileIndex, this.clickedFieldType, this.pawnList);
                    if (!this.moves.isAttackPossible) {
                        this.moves = new PossibleMove();
                        this.moves.generatePossibleMoves(tileIndex, this.clickedFieldType, this.pawnList);
                    }
                    this.focusedPawn = item;
                    this.focusedPawn.disable();
                    this.sticker = new Sticking(true, this.clickedFieldType);

                    this.sticker.stickToMouse(this.clickedFieldType, this.focusedPawn, this.moves);
                    this.pickedUp = true;
                }
            }
        }



    }

    public dropPawn(tileIndex: Index) {
        if (this.focusedPawn && this.pickedUp) {
            this.sticker.release();
            this.focusedPawn.changePosition(tileIndex, this.pawnList, this.moves.possibleMoves);
            this.focusedPawn.enable();
            this.moves.possibleMoves = [];
            this.game.switchPlayers();
            this.pickedUp = false;
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
