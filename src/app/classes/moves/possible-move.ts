import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {Move} from './move';

export class PossibleMove extends Move {

    constructor() {
        super();
    }


    public generatePossibleMoves(tileIndex: Index, color: string, pawnList: Array<Pawn>): void {
        this.possibleMoves = [];
        let left: Index, right: Index, sign: number;
        sign = color === 'black' ? -1 : 1;
        left = {
            x: tileIndex.x - 1,
            y: tileIndex.y + sign
        };
        right = {
            x: tileIndex.x + 1,
            y: tileIndex.y + sign
        };
        this.possibleMoves = this.FieldEmpty(left, right, pawnList);
    }

    private FieldEmpty(first: Index, second: Index, pawnList: Array<Pawn>): Array<Index> {
        const itemsToAdd: Array<Index> = [];
        let foundItem: boolean = false;
        for (const item of pawnList) {
            if (item.comparePawns(first)) {
                foundItem = true;
            }
        }
        if (!foundItem) {
            itemsToAdd.push(first);
        }
        foundItem = false;

        for (const item of pawnList) {
            if (item.comparePawns(second)) {
                foundItem = true;
            }
        }
        if (!foundItem) {
            itemsToAdd.push(second);
        }
        return itemsToAdd;
    }
}
