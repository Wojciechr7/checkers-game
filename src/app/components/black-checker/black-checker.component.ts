import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {Index} from '../../interfaces';

@Component({
  selector: 'app-black-checker',
  templateUrl: './black-checker.component.html',
  styleUrls: ['./black-checker.component.css']
})
export class BlackCheckerComponent implements OnInit {
    @Input() tileIndex: Index;
    styles: Object;

  constructor(public as: AppService) { }

    public setBackground(tileIndex) {
        for (const pawn of this.as.pawnList) {
            if (pawn.comparePawns(tileIndex)) {
                if (pawn.Queen) {
                    return Object.assign({}, this.styles, {
                        backgroundImage: 'url("app/img/black_checker_supernova.png")'
                    });
                }
            }
        }
        return Object.assign({}, this.styles, {
            backgroundImage: 'url("app/img/black_checker.png")'
        });
    }

  ngOnInit() {
  }

}
