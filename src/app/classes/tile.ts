import {Index} from '../interfaces';

export class Tile {
    public index: Index;
    public square: number;

    constructor(index?: Index, number?: number) {
        this.index = index;
        this.square = number;
    }
}
