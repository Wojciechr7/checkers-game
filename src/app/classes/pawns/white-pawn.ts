import {Pawn} from './pawn';

export class WhitePawn extends Pawn {

    constructor (x: number, y: number, display: boolean) {
        super(x, y, display);
        this.color = 'white';
    }

    public move(): void {
        console.log('moving down');
    }


}