import {Player} from './player';
import {PlayerSettings} from '../../settings/game.const';
import {Pawn} from '../pawns/pawn';

export class WhitePlayer extends Player {


    constructor(ownedCheckers: number, lostCheckers: number) {
        super(ownedCheckers, lostCheckers);
        this.active = true;
    }


    public getColor(): string {
        return 'white';
    }

    public update(pawnList: Array<Pawn>): void {
        let counter: number;
        counter = 0;
        for (const pawn of pawnList) {
            if (pawn.getColor() === 'white' && pawn.Display) {
                counter++;
            }
        }
        this.ownedCheckers = counter;
        this.lostCheckers = PlayerSettings.INIT_PAWNS - counter;
        this.calculateScore();
    }
}
