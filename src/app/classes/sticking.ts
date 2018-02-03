import * as $ from 'jquery';

export class Sticking {
    private sticking: boolean;
    private color: string;


    constructor(sticking: boolean, color: string) {
        this.sticking = sticking;
        this.color = color;
    }


    public stickToMouse(color: string): void {
        $('.sticking-pawn').css(
            {
                background: 'url("app/img/' + color + '_checker.png")',
                backgroundSize: '100% 100%',
                display: 'block',
            });
        $(document).mousemove((e) => {
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
