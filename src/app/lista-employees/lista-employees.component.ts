import { CommonModule, DatePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-employees',
  standalone: true,
  imports: [DatePipe, CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-employees.component.html',
  styleUrl: './lista-employees.component.scss'
})
export default class ListaEmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService){}

  employees: any[] = [];
  filteredEmployees: any[] = [];
  searchCedula: string = '';
  edit = "/edit";
  eliminar: boolean=false;
  employee: string = '';
  id: any;

  ngOnInit(): void {
    this.loadEmployees();
      /* this.employeeService.list().subscribe((employees: any)=>{
        this.employees = employees;
        console.log(this.employees);
        this.filteredEmployees = employees;
      }) */
  }
  loadEmployees(): void {
    this.employeeService.list().subscribe((employees: any) => {
      this.employees = employees;
      this.filteredEmployees = employees; // Inicializa también filteredEmployees
      console.log(this.employees);
    });
  }

  filterByCedula(): void {

  if (this.searchCedula) {
    this.employeeService.getbyCedula(this.searchCedula).subscribe((response: any) => {
      console.log('Respuesta de la API:', response);

      const filteredEmployee = response.data; // Accede a la propiedad data

      if (filteredEmployee) {
        this.filteredEmployees = [filteredEmployee]; // Asigna el único empleado encontrado
        console.log('Empleado asignado a filteredEmployees:', this.filteredEmployees);
      } else {
        this.filteredEmployees = []; // Si no se encuentra, asignar un array vacío
        console.log('No se encontró empleado.');
      }
    });
  } else {
    this.loadEmployees(); // Si el campo de búsqueda está vacío, recargar todos los empleados
  }
}

  openAlert(name: string, id: number){
    this.employee = "esta seguro de eliminar el empleado " + name + " ?";
    this.id=id;
    this.eliminar = true;
  }

  confirmAlert(){
    this.eliminar = false;
    this.employeeService.delete(this.id).subscribe(()=>{});
    this.employeeService.list().subscribe((employees:any)=>{
      this.loadEmployees();
    });
    window.location.reload();
  }

  closeAlert(){
    this.eliminar = false;
  }

}
