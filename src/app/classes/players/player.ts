import {Pawn} from '../pawns/pawn';

export abstract class Player {

    protected score: number;
    protected ownedCheckers: number;
    protected lostCheckers: number;
    protected active: boolean;


    constructor(owned: number, lost: number) {
        this.ownedCheckers = owned;
        this.lostCheckers = lost;
    }

    get Active(): boolean {
        return this.active;
    }

    set Active(state: boolean) {
        this.active = state;
    }

    public abstract getColor(): string;
    public abstract update(pawnList: Array<Pawn>): void;

    public calculateScore(): number {
        return (this.ownedCheckers * 100 - this.lostCheckers * 10);
    }

    public getNumberOfPawns(): number {
        return this.ownedCheckers;
    }

    public getNumberOfLostPawns(): number {
        return this.lostCheckers;
    }

    public playerActive(): boolean {
        return this.active;
    }



}
