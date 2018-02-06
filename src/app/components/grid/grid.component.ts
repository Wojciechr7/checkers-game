import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {CollectionService} from '../../collection.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
    styles: Object;

  constructor(public as: AppService, public cs: CollectionService) { }

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

  ngOnInit() {
    this.as.startGame();
  }

}
