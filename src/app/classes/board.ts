import {Tile} from './tile';

export class Board {
    private width: number;
    private height: number;
    private array: Tile[][];

    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
        this.array = [];
    }

    public createArray(): Tile[][] {
        let square = 0;

        for (let i = 0; i < this.width - 1; i++) {
            this.array[i] = [];
            for (let j = 0; j < this.height - 1; j++) {
                this.array[i].push(new Tile({x: i, y: j}, square++));
            }
        }
        return this.array;
    }
}
