import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BlackCheckerComponent} from "./components/black-checker/black-checker.component";
import {ChatComponent} from "./components/chat/chat.component";
import {CheckerComponent} from "./components/checker/checker.component";
import {GridComponent} from "./components/grid/grid.component";
import {ScoreComponent} from "./components/score/score.component";
import {TileComponent} from "./components/tile/tile.component";
import {WhiteCheckerComponent} from "./components/white-checker/white-checker.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
          BlackCheckerComponent,
          ChatComponent,
          CheckerComponent,
          GridComponent,
          ScoreComponent,
          TileComponent,
          WhiteCheckerComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
