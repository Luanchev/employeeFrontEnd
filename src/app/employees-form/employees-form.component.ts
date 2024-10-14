import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-form',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './employees-form.component.html',
  styleUrl: './employees-form.component.scss'
})
export default class EmployeesFormComponent  {

  formEmployee: FormGroup;

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private employeeService : EmployeeService
  ){

  this.formEmployee = this.fb.group({
    name:['', Validators.required],
    surname:['', Validators.required],
    cedula:['', Validators.required],
    address:['', Validators.required],
    telephone:['', Validators.required],
    photo:['', Validators.required]
  });
  }

  create(){
    const employee = {
      "name": this.formEmployee.value.name,
      "surname":  this.formEmployee.value.surname,
      "cedula": this.formEmployee.value.cedula,
      "address": this.formEmployee.value.address,
      "telephone": this.formEmployee.value.telephone,
      "photo": this.formEmployee.value.photo
    }

    this.formEmployee.value;
    this.employeeService.create(employee).subscribe(()=>{
      this.router.navigate(['/']);
    });

  }


}
