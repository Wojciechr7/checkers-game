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
        if ($(window).width() > 600) {
            $('.sticking-pawn').css(
                {
                    background: 'url("app/img/' + color + '_checker.png")',
                    backgroundSize: '100% 100%',
                    display: 'block',
                    transform: 'rotate(200deg)'
                });
            $(document).mousemove((e) => {
                if (e.target.clientHeight > 300) {
                    moves.possibleMoves = [];
                    this.release();
                }
                $('.sticking-pawn').css(
                    {
                        left: e.originalEvent.clientX - 35,
                        top: e.originalEvent.clientY - 35
                    });
            });
        }
    }

    public release() {
        if ($(window).width() > 600) {
            $('.sticking-pawn').css('display', 'none');
            $('.message-input').focus();
        }
    }
}
