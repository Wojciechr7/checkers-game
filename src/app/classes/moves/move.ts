import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {IndexColor} from '../../interfaces/index-color';

export abstract class Move {

    public possibleMoves: Array<Index>;
    public possibleAttacks: Array<Index>;


    constructor() {

    }


    public isFieldEmpty(first: Index, second: Index, pawnList: Array<Pawn>): Array<Index> {
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

    public abstract generatePossibleMoves(tileIndex: Index, sign: string, pawnList: Array<Pawn>): void;

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

    public isFieldFilled(first: IndexColor, second: IndexColor, pawnList: Array<Pawn>): Array<Index> {
        const itemsToAdd: Array<Index> = [];

        for (const item of pawnList) {
            if (item.comparePawns(first)) {
                first.color = item.getColor();
                itemsToAdd.push(first);
                break;
            }
        }

        for (const item of pawnList) {
            if (item.comparePawns(second)) {
                second.color = item.getColor();
                itemsToAdd.push(second);
                break;
            }
        }

        return itemsToAdd;
    }

}
