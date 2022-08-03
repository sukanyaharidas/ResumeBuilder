import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtemplatesComponent } from './showtemplates.component';

describe('ShowtemplatesComponent', () => {
  let component: ShowtemplatesComponent;
  let fixture: ComponentFixture<ShowtemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
