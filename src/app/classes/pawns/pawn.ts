export abstract class Pawn {
    protected x: number;
    protected y: number;
    protected display: boolean;
    protected color: string;

    constructor (xPos: number, yPos: number, disp: boolean) {
        this.x = xPos;
        this.y = yPos;
        this.display = disp;
    }

    public canDisplay(tileIndex, color: string): boolean {
        return (this.x === tileIndex.x && this.y === tileIndex.y && this.display && this.color === color);
    }


    public abstract move(): void;

}
