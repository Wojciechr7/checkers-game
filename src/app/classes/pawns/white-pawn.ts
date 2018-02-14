import {Pawn} from './pawn';
import {Index} from '../../interfaces';
import {GameSettings} from '../../settings/game.const';

export class WhitePawn extends Pawn {

    constructor (x: number, y: number, display: boolean, id: number) {
        super(x, y, display, id);
        this.color = 'white';
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
                if (this.y === GameSettings.MAX_POSITION) {
                    this.makeQueen();
                }
            } else if (Math.abs(this.y - tileIndex.y) === 2) {
                pawnToRemove = this.findRemovePosition(tileIndex);
                this.removePawn(pawnToRemove, pawnlist);
                this.x = tileIndex.x;
                this.y = tileIndex.y;
                if (this.y === GameSettings.MAX_POSITION) {
                    this.makeQueen();
                }
                return true;
            } else {
                pawnToRemove = this.findRemovePosition(tileIndex);
                if (pawnToRemove) {
                    this.removePawn(pawnToRemove, pawnlist);
                    this.x = tileIndex.x;
                    this.y = tileIndex.y;
                    if (this.y === GameSettings.MAX_POSITION) {
                        this.makeQueen();
                    }
                    return true;
                }

            }
        }
        return false;
    }

}
