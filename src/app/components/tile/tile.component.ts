import { Component, OnInit, Input } from '@angular/core';
import {Index} from '../../interfaces';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
    @Input() tileIndex: Index;
    @Input() square: number;

  constructor(public as: AppService) {
  }

    public display(tileIndex: Index, color: string) {
        for (let item of this.as.pawnList) {
            if (item.comparePawns(tileIndex, color)) {
                return true;
            }
        }
        return false;
    }


  ngOnInit() {
  }

}
