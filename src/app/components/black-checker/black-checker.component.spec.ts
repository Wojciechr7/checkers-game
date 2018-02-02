import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackCheckerComponent } from './black-checker.component';

describe('BlackCheckerComponent', () => {
  let component: BlackCheckerComponent;
  let fixture: ComponentFixture<BlackCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
