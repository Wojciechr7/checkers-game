import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {Index} from '../../interfaces';

@Component({
    selector: 'app-white-checker',
    templateUrl: './white-checker.component.html',
    styleUrls: ['./white-checker.component.css']
})
export class WhiteCheckerComponent implements OnInit {
    @Input() tileIndex: Index;
    styles: Object;

    constructor(public as: AppService) {
    }

    public setBackground(tileIndex) {
        for (const pawn of this.as.pawnList) {
            if (pawn.comparePawns(tileIndex)) {
                if (pawn.Queen) {
                    return Object.assign({}, this.styles, {
                        backgroundImage: 'url("app/img/white_checker_supernova.png")'
                    });
                }
            }
        }
        return Object.assign({}, this.styles, {
            backgroundImage: 'url("app/img/white_checker.png")'
        });
    }

    ngOnInit() {
    }

}
