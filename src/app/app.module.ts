import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { TileComponent } from './tile/tile.component';
import { CheckerComponent } from './checker/checker.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    TileComponent,
    CheckerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
