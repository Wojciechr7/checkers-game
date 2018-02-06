import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {Move} from './move';

export class PossibleMove extends Move {

    constructor() {
        super();
    }


    public generatePossibleMoves(tileIndex: Index, color: string, pawnList: Array<Pawn>): void {
        this.possibleMoves = [];
        let possibleChecks: Array<Index>;
        possibleChecks = [
            {
                x: tileIndex.x - 1,
                y: tileIndex.y - 1
            },
            {
                x: tileIndex.x + 1,
                y: tileIndex.y - 1
            },
            {
                x: tileIndex.x - 1,
                y: tileIndex.y + 1
            },
            {
                x: tileIndex.x + 1,
                y: tileIndex.y + 1
            }
        ];
        this.possibleMoves = this.FieldEmpty(possibleChecks, pawnList, color, tileIndex);
    }

    private FieldEmpty(possibleChecks: Array<Index>, pawnList: Array<Pawn>, color: string, tileIndex: Index): Array<Index> {
        const itemsToAdd: Array<Index> = [];
        let a: number, b: number;
        if (color === 'black') {
            a = 0;
            b = 1;
        } else if (color === 'white') {
            a = 2;
            b = 3;
        }
        for (const pawn of pawnList) {
            if (pawn.comparePawns(tileIndex)) {
                if (pawn.Queen) {
                    a = 0;
                    b = 3;
                }
            }
        }

        while (a <= b) {
            let foundItem: boolean = false;
            for (const item of pawnList) {
                if (item.comparePawns(possibleChecks[a])) {
                    foundItem = true;
                }
            }
            if (!foundItem) {
                itemsToAdd.push(possibleChecks[a]);
            }
            foundItem = false;
            a++;
        }

        return itemsToAdd;
    }
}
