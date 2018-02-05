import {Player} from './player';

export class WhitePlayer extends Player {


    constructor(ownedCheckers: number, lostCheckers: number) {
        super(ownedCheckers, lostCheckers);
    }


    public getColor(): string {
        return 'white';
    }
}
