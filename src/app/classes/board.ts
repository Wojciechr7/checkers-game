import {Tile} from './tile';
import {Pawn} from './pawns/pawn';
import {Index} from '../interfaces';

export class Board {
    private width: number;
    private height: number;

    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;

    }

    public createTiles(): Tile[][] {
        let square = 0;
        let array: Tile[][];
        array = [];
        for (let i = 0; i < this.width - 1; i++) {
            array[i] = [];
            for (let j = 0; j < this.height - 1; j++) {
                array[i].push(new Tile({x: i, y: j}, square++));
            }
        }
        return array;
    }


    public checkField(tileIndex: Index, pawnList: Array<Pawn>): string {
        for (const item of pawnList) {
            if (item.comparePawns(tileIndex)) {
                return item.getColor();
            }
        }
        return 'empty';
    }
}
