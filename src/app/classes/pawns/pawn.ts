import {Index} from '../../interfaces';
import {GameSettings} from '../../settings/game.const';
import {CollectionData} from '../../interfaces/collection-data';

export abstract class Pawn {
    protected x: number;
    protected y: number;
    protected display: boolean;
    protected color: string;
    protected queen: boolean;
    protected id: number;

    constructor (xPos: number, yPos: number, disp: boolean, identity: number) {
        this.x = xPos;
        this.y = yPos;
        this.display = disp;
        this.queen = false;
        this.id = identity;
    }

    public comparePawns(tileIndex: Index, color?: string): boolean {
        if (color)
            return (this.x === tileIndex.x && this.y === tileIndex.y && this.display && this.color === color);
        else return (this.x === tileIndex.x && this.y === tileIndex.y && this.display);

    }

    public setAllData(dbData) {
        for (const item of dbData) {
            if (item.id === this.id) {
                this.x = item.x;
                this.y = item.y;
                this.display = item.display;
                this.color = item.color;
                this.queen = item.queen;
            }
        }
    }

    public getAllData(): CollectionData {
        return {
            x: this.x,
            y: this.y,
            color: this.color,
            display: this.display,
            queen: this.queen,
            id: this.id
        };
    }

    get Display(): boolean {
        return this.display;
    }
    get Queen(): boolean {
        return this.queen;
    }

    public makeQueen(): void {
        this.queen = true;
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
    public getStickedPawns(pawnList: Array<Pawn>): Array<Index> {
        let possibleChecks: Array<Index>;
        let itemsToAdd: Array<Index>;
        itemsToAdd = [];
        let sign: number = -1;
        let sign2: number = -1;

        possibleChecks = [
            {
                x: this.x - 1,
                y: this.y - 1
            },
            {
                x: this.x + 1,
                y: this.y - 1
            },
            {
                x: this.x - 1,
                y: this.y + 1
            },
            {
                x: this.x + 1,
                y: this.y + 1
            }
        ];

        for (const i in possibleChecks) {
            for (const item of pawnList) {
                if (item.comparePawns(possibleChecks[i])) {
                    if (item.getColor() !== this.color && this.display && item.Display) {
                        possibleChecks[i].x += sign;
                        possibleChecks[i].y += sign2;
                        if (this.fieldInsideGrid(possibleChecks[i])) {
                            itemsToAdd.push(possibleChecks[i]);
                        }
                    }
                    break;
                }
            }
            sign *= -1;
            if (parseInt(i) === 1) {
                sign2 = 1;
            }
        }

        return itemsToAdd;
    }

    public findEmptyFields(attackPositions: Array<Index>, pawnList: Array<Pawn>): Array<Index> {
        const itemsToAdd: Array<Index> = [];
        let foundItem: boolean = false;
        for (const position of attackPositions) {
            for (const item of pawnList) {
                if (item.comparePawns(position)) {
                    foundItem = true;
                }
            }
            if (!foundItem) {
                itemsToAdd.push(position);
            }
            foundItem = false;
        }
        return itemsToAdd;
    }

    private fieldInsideGrid(field: Index): boolean {
        if (field.x >= GameSettings.MIN_POSITION && field.x <= GameSettings.MAX_POSITION) {
            if (field.y >= GameSettings.MIN_POSITION && field.y <= GameSettings.MAX_POSITION) {
                return true;
            }
        }
        return false;
    }

    public findRemovePosition(target: Index): Index {
        if (this.x > target.x) {
            if (this.y > target.y) {
                return {x: target.x + 1, y: target.y + 1};
            }
            if (this.y < target.y) {
                return {x: target.x + 1, y: target.y - 1};
            }
        }
        if (this.x < target.x) {
            if (this.y > target.y) {
                return {x: target.x - 1, y: target.y + 1};
            }
            if (this.y < target.y) {
                return {x: target.x - 1, y: target.y - 1};
            }
        }
    }

    public abstract canAttack(pawnList: Array<Pawn>): boolean;



    public abstract move(tileIndex: Index): void;
    public abstract changePosition(tileIndex: Index, pawnlist: Array<Pawn>, possibleMoves: Array<Index>): boolean;
}
