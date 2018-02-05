import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {Move} from './move';
import {IndexColor} from '../../interfaces/index-color';

export class PossibleAttack extends Move {


    constructor() {
        super();
        this.isAttackPossible = false;
    }

    public generatePossibleMoves(tileIndex: Index, color: string, pawnList: Array<Pawn>): void {
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
        this.possibleAttacks = this.FieldFilled(left, right, pawnList, color, sign);
        this.possibleMoves = this.findEmptyFields(this.possibleAttacks, pawnList);

    }

    private findEmptyFields(attackPositions: Array<Index>, pawnList: Array<Pawn>): Array<Index> {
        const itemsToAdd: Array<Index> = [];
        let foundItem: boolean = false;
        for (const position of attackPositions) {
            for (const item of pawnList) {
                if (item.comparePawns(position)) {
                    foundItem = true;
                }
            }
            if (!foundItem) {
                itemsToAdd.push(position);
            }
            foundItem = false;
        }
        if (itemsToAdd.length === 0) {
            this.isAttackPossible = false;
        }
        return itemsToAdd;
    }


    private FieldFilled(first: Index, second: Index, pawnList: Array<Pawn>, color: string, sign: number): Array<Index> {
        this.isAttackPossible = false;
        const itemsToAdd: Array<Index> = [];

        for (const item of pawnList) {
            if (item.comparePawns(first)) {
                if (item.getColor() !== color) {
                    first.x -= 1;
                    first.y += sign;
                    itemsToAdd.push(first);
                }
                break;
            }
        }

        for (const item of pawnList) {
            if (item.comparePawns(second)) {
                if (item.getColor() !== color) {
                    second.x += 1;
                    second.y += sign;
                    itemsToAdd.push(second);
                }
                break;
            }
        }
        if (itemsToAdd.length > 0) {
            this.isAttackPossible = true;
        }
        return itemsToAdd;
    }




}
