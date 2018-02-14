import {Index} from '../../interfaces';
import {Pawn} from '../pawns/pawn';
import {Move} from './move';
import {GameSettings} from "../../settings/game.const";

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
                    return this.findQueenMoves(pawnList, color, tileIndex);
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

    private findQueenMoves(pawnList: Array<Pawn>, color: string, tileIndex: Index): Array<Index> {
        const itemsToAdd: Array<Index> = [];
        let y: number, x: number;
        let foundItem: boolean;
        foundItem = false;

        let directions: Array<Index>;
        directions = [
            {x: -1, y: -1},
            {x: 1, y: 1},
            {x: 1, y: -1},
            {x: -1, y: 1}
        ];

        for (let dir = 0; dir < directions.length; dir++) {
            x = tileIndex.x + directions[dir].x;
            y = tileIndex.y + directions[dir].y;
            while (x >= GameSettings.MIN_POSITION && x <= GameSettings.MAX_POSITION) {
                for (const item of pawnList) {
                    if (item.comparePawns({x: x, y: y})) {
                        if (item.getColor() !== color) {
                            if (this.checkNextField({x: x + directions[dir].x, y: y + directions[dir].y}, pawnList)) {
                                itemsToAdd.push({x: x + directions[dir].x, y: y + directions[dir].y});
                            }
                        }
                        foundItem = true;
                        break;
                    }
                }
                if (foundItem) {
                    foundItem = false;
                    break;
                }
                if (!foundItem) {
                    itemsToAdd.push({x: x, y: y});
                }
                foundItem = false;
                x += directions[dir].x;
                y += directions[dir].y;
            }
        }

        return itemsToAdd;
    }
    private checkNextField(index: Index, pawnList: Array<Pawn>): boolean {
        for (const item of pawnList) {
            if (item.comparePawns(index)) {
                return false;
            }
        }
        return true;
    }
}
