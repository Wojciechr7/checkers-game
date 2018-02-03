import {Pawn} from './pawn';

export class WhitePawn extends Pawn {

    constructor (x: number, y: number, display: boolean) {
        super(x, y, display);
        this.color = 'white';
    }

    public move(): void {
        this.display = false;
    }

    public changePosition(tileIndex): void {
        this.x = tileIndex.x;
        this.y = tileIndex.y;
    }

}