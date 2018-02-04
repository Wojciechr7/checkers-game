import {Index} from '../../interfaces';
import {Pawn} from './pawn';

export class BlackPawn extends Pawn {

    constructor(x: number, y: number, display: boolean) {
        super(x, y, display);
        this.color = 'black';
    }

    public move(tileIndex: Index): void {

        this.display = false;



    }

    public changePosition(tileIndex: Index): void {
        this.x = tileIndex.x;
        this.y = tileIndex.y;
    }

}
