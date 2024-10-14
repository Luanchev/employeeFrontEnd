import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFormEditarComponent } from './employees-form-editar.component';

describe('EmployeesFormEditarComponent', () => {
  let component: EmployeesFormEditarComponent;
  let fixture: ComponentFixture<EmployeesFormEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesFormEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesFormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
