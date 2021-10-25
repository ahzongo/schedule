import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCalendarComponent } from './get-calendar.component';

describe('GetCalendarComponent', () => {
  let component: GetCalendarComponent;
  let fixture: ComponentFixture<GetCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
