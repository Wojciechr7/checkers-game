import {Tile} from './tile';
import {Pawn} from './pawns/pawn';
import {BlackPawn} from './pawns/black-pawn';
import {WhitePawn} from './pawns/white-pawn';

export class Board {
    private width: number;
    private height: number;
    public grid: Tile[][];
    public pawnList: Array<Pawn>;

    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
        this.grid = this.createTiles();
        this.pawnList = this.createData();
        console.log(this.pawnList);
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

    public createData(): Array<Pawn> {
        return [
            new BlackPawn(3, 5, true),
            new BlackPawn(4, 5, true),
            new WhitePawn(7, 2, true),
            new WhitePawn(7, 3, true)
        ];
    }

    public display(tileIndex, color: string) {
        for (let item of this.pawnList) {
            if (item.canDisplay(tileIndex, color)) {
                return true;
            }
        }
        return false;
    }
}
