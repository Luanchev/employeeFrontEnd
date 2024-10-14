import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./lista-employees/lista-employees.component')
  },
  {
    path:'new',
    loadComponent:()=>import('./employees-form/employees-form.component')

  },
  {
    path: ':id/edit',
    loadComponent:() => import('./employees-form-editar/employees-form-editar.component')

  }

];
export{routes};
