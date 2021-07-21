import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartmonthComponent } from './chartmonth.component';

describe('ChartmonthComponent', () => {
  let component: ChartmonthComponent;
  let fixture: ComponentFixture<ChartmonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartmonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
