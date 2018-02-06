import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {Move} from './move';

export class PossibleAttack extends Move {

    constructor() {
        super();
        this.isAttackPossible = false;
    }


    public generatePossibleMoves(tileIndex: Index, color: string, pawnList: Array<Pawn>): void {

        for (const pawn of pawnList) {
            if (pawn.comparePawns(tileIndex)) {
                this.possibleAttacks = pawn.getStickedPawns(pawnList);
                this.possibleMoves = pawn.findEmptyFields(this.possibleAttacks, pawnList);
            }
        }
    }



}
