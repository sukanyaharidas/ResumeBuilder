import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsercredentialsComponent } from './manage-usercredentials.component';

describe('ManageUsercredentialsComponent', () => {
  let component: ManageUsercredentialsComponent;
  let fixture: ComponentFixture<ManageUsercredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUsercredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsercredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
