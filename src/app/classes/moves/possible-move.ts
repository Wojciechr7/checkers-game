import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {Move} from './move';

export class PossibleMove extends Move {

    constructor() {
        super();
    }


    public generatePossibleMoves(tileIndex: Index, sign: string, pawnList: Array<Pawn>): void {
        this.possibleMoves = [];
        let left: Index, right: Index;
        left = {
            x: tileIndex.x - 1,
            y: eval(tileIndex.y + sign + 1)
        };
        right = {
            x: tileIndex.x + 1,
            y: eval(tileIndex.y + sign + 1)
        };
        this.possibleMoves = this.isFieldEmpty(left, right, pawnList);
    }
}
