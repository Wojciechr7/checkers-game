import {Index} from '../../interfaces';

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

    public comparePawns(tileIndex: Index, color?: string): boolean {
        if (color)
            return (this.x === tileIndex.x && this.y === tileIndex.y && this.display && this.color === color);
        else return (this.x === tileIndex.x && this.y === tileIndex.y && this.display);

    }

    public getColor() {
        return this.color;
    }

    public enable() {
        this.display = true;
    }




    public abstract move(tileIndex: Index): void;
    public abstract changePosition(tileIndex: Index): void;
}
