import * as $ from 'jquery';
import {Index} from '../interfaces';

export class Arrow {
    private beforeIndex: Index;
    private afterIndex: Index;

    constructor(b: Index, tileIndex: Index) {
        this.beforeIndex = b;
        this.afterIndex = tileIndex;
    }

    get BeforeIndex(): Index {
        return this.beforeIndex;
    }
    get AfterIndex(): Index {
        return this.afterIndex;
    }

    public hideArrow(): void {
        $('.arrow').css('opacity', '0');
    }

    public drawArrow(): void {
        let square: number;
        let left: number;
        let top: number;
        let rotation: number;
        square = 12.5;

        if (this.beforeIndex.x > this.afterIndex.x) {
            if (this.beforeIndex.y < this.afterIndex.y) {
                left = (this.beforeIndex.x) * square - Math.abs(this.beforeIndex.x - this.afterIndex.x) / 2 * square;
                top = (this.beforeIndex.y) * square + Math.abs(this.beforeIndex.y - this.afterIndex.y) / 2 * square;
                rotation = 135;
            }
            if (this.beforeIndex.y > this.afterIndex.y) {
                left = (this.beforeIndex.x) * square - Math.abs(this.beforeIndex.x - this.afterIndex.x) / 2 * square;
                top = (this.beforeIndex.y) * square - Math.abs(this.beforeIndex.y - this.afterIndex.y) / 2 * square;
                rotation = 225;
            }
        }
        if (this.beforeIndex.x < this.afterIndex.x) {
            if (this.beforeIndex.y < this.afterIndex.y) {
                left = (this.beforeIndex.x) * square + Math.abs(this.beforeIndex.x - this.afterIndex.x) / 2 * square;
                top = (this.beforeIndex.y) * square + Math.abs(this.beforeIndex.y - this.afterIndex.y) / 2 * square;
                rotation = 45;
            }
            if (this.beforeIndex.y > this.afterIndex.y) {
                left = (this.beforeIndex.x) * square + Math.abs(this.beforeIndex.x - this.afterIndex.x) / 2 * square;
                top = (this.beforeIndex.y) * square - Math.abs(this.beforeIndex.y - this.afterIndex.y) / 2 * square;
                rotation = 315;
            }
        }


        $('.arrow').css({
            left: left + '%',
            top: top + '%',
            transform: 'rotate(' + rotation + 'deg)',
            opacity: 1
        });


    }
}
