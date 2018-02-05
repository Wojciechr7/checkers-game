import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {IndexColor} from '../../interfaces/index-color';

export abstract class Move {

    public possibleMoves: Array<Index>;
    public possibleAttacks: Array<Index>;
    public isAttackPossible: boolean;


    constructor() {

    }

    public abstract generatePossibleMoves(tileIndex: Index, color: string, pawnList: Array<Pawn>): void;

    public isMovePossible(tileIndex: Index): boolean {
        if (this.possibleMoves) {
            for (const item of this.possibleMoves) {
                if (item.x === tileIndex.x && item.y === tileIndex.y) {
                    return true;
                }
            }
        }
        return false;
    }

}
