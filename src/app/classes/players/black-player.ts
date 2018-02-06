import {Player} from './player';
import {Pawn} from '../pawns/pawn';
import {PlayerSettings} from '../../settings/game.const';


export class BlackPlayer extends Player {


    constructor(ownedCheckers: number, lostCheckers: number) {
        super(ownedCheckers, lostCheckers);
        this.active = false;
    }

    public getColor(): string {
        return 'black';
    }
    public update(pawnList: Array<Pawn>): void {
        let counter: number;
        counter = 0;
        for (const pawn of pawnList) {
            if (pawn.getColor() === 'black' && pawn.Display) {
                counter++;
            }
        }
        this.ownedCheckers = counter;
        this.lostCheckers = PlayerSettings.INIT_PAWNS - counter;
        this.calculateScore();

        if (this.lostCheckers === 12) {
            alert('White player won the game!');
        }
    }

}
