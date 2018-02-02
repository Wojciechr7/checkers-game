import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteCheckerComponent } from './white-checker.component';

describe('WhiteCheckerComponent', () => {
  let component: WhiteCheckerComponent;
  let fixture: ComponentFixture<WhiteCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
