import {Pawn} from './pawn';
import {Index} from '../../interfaces';
import {Move} from '../moves/move';

export class WhitePawn extends Pawn {

    constructor (x: number, y: number, display: boolean) {
        super(x, y, display);
        this.color = 'white';
    }

    public move(tileIndex: Index): void {
        this.display = false;
    }

    public changePosition(tileIndex: Index, pawnlist: Array<Pawn>, possibleMoves: Array<Index>): void {
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
            } else if (Math.abs(this.y - tileIndex.y) === 2) {

                pawnToRemove = this.setPawnToRemove(tileIndex);

                this.removePawn(pawnToRemove, pawnlist);
                this.x = tileIndex.x;
                this.y = tileIndex.y;
            }
        }
    }

}
