import * as $ from 'jquery';

export class Sticking {
    private sticking: boolean;
    private color: string;


    constructor(sticking: boolean, color: string) {
        this.sticking = sticking;
        this.color = color;
    }


    public stickToMouse(color: string): void {
        $(document).mousemove((e) => {
            if (this.sticking) {
                $('.sticking-pawn').css(
                    {
                        left: e.originalEvent.clientX + 10,
                        top: e.originalEvent.clientY + 10,
                        display: 'block',
                        background: 'url("app/img/' + color + '_checker.png")',
                        backgroundSize: '100% 100%'
                    });
            }
        });
    }

    public release() {
        this.sticking = false;
        $('.sticking-pawn').css('display', 'none');
    }
}
