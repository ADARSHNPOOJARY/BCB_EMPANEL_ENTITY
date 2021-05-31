import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpanelledEntityComponent } from './empanelled-entity.component';

describe('EmpanelledEntityComponent', () => {
  let component: EmpanelledEntityComponent;
  let fixture: ComponentFixture<EmpanelledEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpanelledEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpanelledEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
