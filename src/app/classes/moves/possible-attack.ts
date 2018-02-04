import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {Move} from './move';
import {IndexColor} from '../../interfaces/index-color';

export class PossibleAttack extends Move {

    constructor() {
        super();
    }

    public generatePossibleMoves(tileIndex: Index, sign: string, pawnList: Array<Pawn>): void {
        let enemyPositions: Array<Index> = [];
        let left: IndexColor, right: IndexColor;
        left = {
            x: tileIndex.x - 1,
            y: eval(tileIndex.y + sign + 1),
            color : ''
        };
        right = {
            x: tileIndex.x + 1,
            y: eval(tileIndex.y + sign + 1),
            color: ''
        };
        enemyPositions = this.isFieldFilled(left, right, pawnList);

        console.log(enemyPositions);
    }




}
