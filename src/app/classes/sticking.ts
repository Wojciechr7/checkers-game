import * as $ from 'jquery';
import {Pawn} from './pawns/pawn';
import {Move} from './moves/move';

export class Sticking {
    private sticking: boolean;
    private color: string;


    constructor(sticking: boolean, color: string) {
        this.sticking = sticking;
        this.color = color;
    }


    public stickToMouse(color: string, focusedPawn: Pawn, moves: Move): void {
        $('.sticking-pawn').css(
            {
                background: 'url("app/img/' + color + '_checker.png")',
                backgroundSize: '100% 100%',
                display: 'block',
                transform: 'rotate(200deg)'
            });
        $(document).mousemove((e) => {
            if (e.target.clientHeight > 100) {
                moves.possibleMoves = [];
                this.release();
            }
            $('.sticking-pawn').css(
                {
                    left: e.originalEvent.clientX + 10,
                    top: e.originalEvent.clientY + 10
                });
        });
    }

    public release() {
        $('.sticking-pawn').css('display', 'none');
    }
}
