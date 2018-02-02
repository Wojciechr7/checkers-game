import { Component, OnInit, Input } from '@angular/core';
import {Index} from '../../interfaces';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
    @Input() tileIndex: Index;
    @Input() square: number;

  constructor() { }


  ngOnInit() {
  }

}
