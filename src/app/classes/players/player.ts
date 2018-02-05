export abstract class Player {

    protected score: number;
    protected ownedCheckers: number;
    protected lostCheckers: number;

    constructor(owned: number, lost: number) {
        this.ownedCheckers = owned;
        this.lostCheckers = lost;
    }

    public abstract calculateScore(): void;


}
