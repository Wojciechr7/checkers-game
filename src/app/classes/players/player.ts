export abstract class Player {

    protected score: number;
    protected ownedCheckers: number;
    protected lostCheckers: number;


    constructor(owned: number, lost: number) {
        this.ownedCheckers = owned;
        this.lostCheckers = lost;
    }

    public abstract getColor(): string;

    public calculateScore(): number {
        return (this.ownedCheckers - this.lostCheckers) * 100;
    }

    public getNumberOfPawns(): number {
        return this.ownedCheckers;
    }

    public getNumberOfLostPawns(): number {
        return this.lostCheckers;
    }


}
