import {Pawn} from './pawn';

export class BlackPawn extends Pawn {

    constructor (x: number, y: number, display: boolean) {
        super(x, y, display);
        this.color = 'black';
    }

    public move(): void {
        console.log('moving up');
    }


}
