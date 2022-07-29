import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTemmplateComponent } from './choose-temmplate.component';

describe('ChooseTemmplateComponent', () => {
  let component: ChooseTemmplateComponent;
  let fixture: ComponentFixture<ChooseTemmplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTemmplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTemmplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
