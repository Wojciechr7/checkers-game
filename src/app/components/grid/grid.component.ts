import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {CollectionService} from '../../collection.service';
import {Index} from '../../interfaces';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
    styles: Object;

    constructor(public as: AppService, public cs: CollectionService) {
    }

    protected setColor(index) {
        if ((index.y + index.x) % 2) {
            return Object.assign({}, this.styles, {
                background: 'black'
            });
        } else {
            return Object.assign({}, this.styles, {
                background: 'white'
            });
        }
    }
    public mobileEvent(tileIndex: Index) {
        this.as.pickUpPawn(tileIndex, true);
    }
    public handleMouseUp(tileIndex: Index) {
        if (this.as.mobilePickedUp) {
            this.as.dropPawn(tileIndex);
            this.cs.updateDB();
            this.as.mobilePickedUp = false;
        }
    }

    public alercik(m) {
        alert(m);
    }

    ngOnInit() {
        this.as.startGame();
    }

}
