import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedINheaderComponent } from './logged-inheader.component';

describe('LoggedINheaderComponent', () => {
  let component: LoggedINheaderComponent;
  let fixture: ComponentFixture<LoggedINheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedINheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedINheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
