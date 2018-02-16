import {Index} from '../../interfaces';
import {Pawn} from './pawn';
import {GameSettings} from '../../settings/game.const';

export class BlackPawn extends Pawn {

    constructor(x: number, y: number, display: boolean, id: number) {
        super(x, y, display, id);
        this.color = 'black';
    }

    public move(tileIndex: Index): void {

        this.display = false;



    }
    public canAttack(pawnList: Array<Pawn>): boolean {
            let stickedPawns: Array<Index>;
            let emptyFields: Array<Index>;


        stickedPawns = this.getStickedPawns(pawnList);
        emptyFields = this.findEmptyFields(stickedPawns, pawnList);

        return emptyFields.length > 0;
    }

    public changePosition(tileIndex: Index, pawnlist: Array<Pawn>, possibleMoves: Array<Index>): boolean {
        let moveIsPossible: boolean = false;
        for (const move of possibleMoves) {
            if (move.x === tileIndex.x && move.y === tileIndex.y) {
                moveIsPossible = true;
            }
        }

        let pawnToRemove: Index;
        if (moveIsPossible) {
            if (Math.abs(this.y - tileIndex.y) === 1) {
                this.x = tileIndex.x;
                this.y = tileIndex.y;
                if (this.y === GameSettings.MIN_POSITION) {
                    this.makeQueen();
                }
            } else if (Math.abs(this.y - tileIndex.y) > 1 && !this.queen) {
                pawnToRemove = this.findRemovePosition(tileIndex);
                this.removePawn(pawnToRemove, pawnlist);
                this.x = tileIndex.x;
                this.y = tileIndex.y;
                if (this.y === GameSettings.MIN_POSITION) {
                    this.makeQueen();
                }
                return true;
            } else if (Math.abs(this.y - tileIndex.y) > 1 && this.queen) {
                pawnToRemove = this.findRemovePosition(tileIndex);
                this.x = tileIndex.x;
                this.y = tileIndex.y;
                if (this.y === GameSettings.MIN_POSITION) {
                    this.makeQueen();
                }
                for (let pawn of pawnlist) {
                    if (pawn.comparePawns(pawnToRemove) && pawn.Display) {
                        this.removePawn(pawnToRemove, pawnlist);
                        return true;
                    }
                }
                this.queenAttacked(tileIndex);
            }
        }
        return false;
    }
}
