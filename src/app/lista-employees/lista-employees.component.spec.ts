import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmployeesComponent } from './lista-employees.component';

describe('ListaEmployeesComponent', () => {
  let component: ListaEmployeesComponent;
  let fixture: ComponentFixture<ListaEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEmployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
