import {Pawn} from './pawn';

export class BlackPawn extends Pawn {

    constructor(x: number, y: number, display: boolean) {
        super(x, y, display);
        this.color = 'black';
    }

    public move(): void {
        this.display = false;

    }

    public changePosition(tileIndex): void {
        this.x = tileIndex.x;
        this.y = tileIndex.y;
    }

}
