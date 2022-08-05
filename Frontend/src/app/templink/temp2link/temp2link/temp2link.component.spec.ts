import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp2linkComponent } from './temp2link.component';

describe('Temp2linkComponent', () => {
  let component: Temp2linkComponent;
  let fixture: ComponentFixture<Temp2linkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temp2linkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp2linkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
