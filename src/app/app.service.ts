import {Injectable} from '@angular/core';
import {Tile} from './classes/tile';
import {Board} from './classes/board';
import {GameSettings} from './settings/game.const';
import {Pawn} from './classes/pawns/pawn';
import {PawnsStatus} from './classes/pawns-status';
import {Index} from './interfaces';
import {Sticking} from './classes/sticking';
import {Move} from './classes/moves/move';
import {PossibleMove} from './classes/moves/possible-move';
import {PossibleAttack} from './classes/moves/possible-attack';
import {Game} from './classes/game';

@Injectable()
export class AppService {
    public board: Board;
    public clickedFieldType: string;
    public grid: Tile[][];
    private focusedPawn: Pawn;
    private sticker: Sticking;
    private moves: Move;
    public game: Game;
    private pickedUp: boolean;
    private pickedUpIndex: Index;
    public pawnList: Array<Pawn>;
    public switchPlayers: boolean;


    constructor() {
        this.board = new Board(GameSettings.H_TILES, GameSettings.V_TILES);
        this.grid = this.board.createTiles();
        this.moves = new PossibleMove();
        this.pickedUp = false;
        this.pawnList = new PawnsStatus().createData();
        this.switchPlayers = false;


    }

    public startGame(): void {
        this.game = new Game();
    }

    public pickUpPawn(tileIndex: Index) {
        if (!this.pickedUp) {
            let pawnNumber: number;
            this.pickedUpIndex = tileIndex;
            this.clickedFieldType = this.board.checkField(tileIndex, this.pawnList);
            pawnNumber = (this.clickedFieldType === 'white') ? 1 : 0;
            if (pawnNumber === this.game.actualPlayer) {
                for (const item of this.pawnList) {
                    if (item.comparePawns(tileIndex, this.clickedFieldType)) {
                        this.moves = new PossibleAttack();
                        this.moves.generatePossibleMoves(tileIndex, this.clickedFieldType, this.pawnList);
                        if (!this.moves.isAttackPossible && this.moves.scanForPossibleAttacks(this.pawnList, this.clickedFieldType)) {
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
            } else {
                this.releaseEvent();
            }
        }


    }

    public dropPawn(tileIndex: Index) {
        if (this.pickedUp) {
            if (this.focusedPawn && this.moves.compareToMoves(tileIndex)) {
                let switchPlayers: boolean;
                switchPlayers = true;
                this.sticker.release();
                this.focusedPawn.changePosition(tileIndex, this.pawnList, this.moves.possibleMoves);
                this.focusedPawn.enable();
                this.moves.possibleMoves = [];
                this.pickedUp = false;
                if (this.game.didAttack(this.pickedUpIndex, tileIndex)) {
                    if (this.moves.canMakeNextMove(this.pawnList, tileIndex)) {
                        switchPlayers = false;
                    }
                }
                if (switchPlayers) {
                    this.switchPlayers = true;
                    this.game.changeActualPlayer(this.focusedPawn);
                }
            }
            if (!this.moves.compareToMoves(tileIndex)) {
                this.releaseEvent();
            }
        }
    }


    public releaseEvent() {
        if (this.focusedPawn) {
            this.sticker.release();
            this.focusedPawn.enable();
            this.moves.possibleMoves = [];
            this.pickedUp = false;
        }
    }

    public mobileEvent(tileIndex: Index) {
        alert(tileIndex);
    }

    public resetGame(): void {
        this.pawnList = new PawnsStatus().createData();
        this.game.reset();

    }


}
