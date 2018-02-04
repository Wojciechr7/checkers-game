import {Pawn} from './pawn';
import {Index} from '../../interfaces';

export class WhitePawn extends Pawn {

    constructor (x: number, y: number, display: boolean) {
        super(x, y, display);
        this.color = 'white';
    }

    public move(tileIndex: Index): void {
        this.display = false;
    }

    public changePosition(tileIndex: Index): void {
        this.x = tileIndex.x;
        this.y = tileIndex.y;
    }

}
