import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp4linkComponent } from './temp4link.component';

describe('Temp4linkComponent', () => {
  let component: Temp4linkComponent;
  let fixture: ComponentFixture<Temp4linkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Temp4linkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp4linkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
