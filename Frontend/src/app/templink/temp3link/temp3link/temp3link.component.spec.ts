import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp3linkComponent } from './temp3link.component';

describe('Temp3linkComponent', () => {
  let component: Temp3linkComponent;
  let fixture: ComponentFixture<Temp3linkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temp3linkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp3linkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
