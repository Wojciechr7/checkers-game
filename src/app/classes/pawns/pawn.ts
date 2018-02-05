import {Index} from '../../interfaces';
import {Move} from '../moves/move';

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
    public disable() {
        this.display = false;
    }

    public removePawn(pawnToRemove: Index, pawnlist: Array<Pawn>) {
        console.log(pawnToRemove);
        for (const item of pawnlist) {
            if (item.comparePawns(pawnToRemove)) {
                item.disable();
            }
        }
    }
    protected setPawnToRemove(tileIndex: Index): Index {
        if (this.x - tileIndex.x > 0 && this.y - tileIndex.y > 0) {
            return {
                x: this.x - 1,
                y: this.y - 1
            };
        } else if (this.y - tileIndex.y > 0) {
            return {
                x: this.x + 1,
                y: this.y - 1
            };
        }
        if (this.x - tileIndex.x > 0 && this.y - tileIndex.y <= 0) {
            return {
                x: this.x - 1,
                y: this.y + 1
            };
        } else if (this.y - tileIndex.y <= 0) {
            return {
                x: this.x + 1,
                y: this.y + 1
            };
        }
    }



    public abstract move(tileIndex: Index): void;
    public abstract changePosition(tileIndex: Index, pawnlist: Array<Pawn>, possibleMoves: Array<Index>): void;
}
