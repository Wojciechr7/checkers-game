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

    public compareToMoves(tileIndex: Index): boolean {
        for (const move of this.possibleMoves) {
            if (JSON.stringify(move) === JSON.stringify(tileIndex)) {
                return true;
            }
        }
        return false;
    }

    public scanForPossibleAttacks(pawnList: Array<Pawn>, field: string): boolean {
        for (const pawn of pawnList) {
            if (pawn.getColor() === field) {
                if (pawn.canAttack(pawnList)) {
                    return false;
                }
            }
        }
        return true;
    }

    public canMakeNextMove(pawnList: Array<Pawn>, tileIndex: Index): boolean {
        for (const pawn of pawnList) {
            if (pawn.comparePawns(tileIndex)) {
                if (pawn.canAttack(pawnList)) {
                    return true;
                }
            }
        }
        return false;
    }

}
