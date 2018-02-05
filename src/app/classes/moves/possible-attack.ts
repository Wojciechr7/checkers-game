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
        let possibleChecks: Array<Index>, sign: number;

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

        this.possibleAttacks = this.FieldFilled(possibleChecks, pawnList, color);
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


    private FieldFilled(possibleChecks: Array<Index>, pawnList: Array<Pawn>, color: string): Array<Index> {
        this.isAttackPossible = false;
        const itemsToAdd: Array<Index> = [];

        let sign: number = -1;
        let sign2: number = -1;

        for (const i in possibleChecks) {
            for (const item of pawnList) {
                if (item.comparePawns(possibleChecks[i])) {
                    if (item.getColor() !== color) {
                        possibleChecks[i].x += sign;
                        possibleChecks[i].y += sign2;
                        itemsToAdd.push(possibleChecks[i]);
                    }
                    break;
                }
            }
            sign *= -1;
            if (parseInt(i) === 1) {
                sign2 = 1;
            }
        }


        if (itemsToAdd.length > 0) {
            this.isAttackPossible = true;
        }
        return itemsToAdd;
    }




}
