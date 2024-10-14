import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private http = inject(HttpClient);

  list(){
    return this.http.get('http://localhost:8080/api/v1/employee');
  }
  get(id: number){
    return this.http.get(`http://localhost:8080/api/v1/employee/getById/${id}`);
  }

  getbyCedula(cedula: string){
    return this.http.get(`http://localhost:8080/api/v1/employee/getByCedula/${cedula}`);
  }

  create(employee: any){
    return this.http.post(`http://localhost:8080/api/v1/employee/registrarEmpleado/`, employee);

  }
  update(id: number, employee: any){
    return this.http.put(`http://localhost:8080/api/v1/employee/actualizarEmpleado/${id}`, employee);
  }
  delete(id: number){
    return this.http.delete(`http://localhost:8080/api/v1/employee/eliminarEmpleado/${id}`);

  }

}
