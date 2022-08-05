import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp1linkComponent } from './temp1link.component';

describe('Temp1linkComponent', () => {
  let component: Temp1linkComponent;
  let fixture: ComponentFixture<Temp1linkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temp1linkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp1linkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
