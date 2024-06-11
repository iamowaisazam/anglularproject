import { Routes } from '@angular/router';
// import { InvoiceListComponent } from './invoice-list/invoice-list.component';
// import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
// import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';



export const routes: Routes = [

            {
              path:'',
              loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
            },
            {
              path:'login',
              loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
            },
            {
              path:'admin',
              loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
              children:[
                  {
                    path:'',
                    loadComponent: () => import('./admin/invoices/invoice-list/invoice-list.component').then(m => m.InvoiceListComponent)
                  },
                  {
                    path:'invoices-list',
                    loadComponent: () => import('./admin/invoices/invoice-list/invoice-list.component').then(m => m.InvoiceListComponent)
                  },
                  {
                    path:'invoices-create',
                    loadComponent: () => import('./admin/invoices/invoice-create/invoice-create.component').then(m => m.InvoiceCreateComponent)
                  },
                  {
                    path:'invoices-edit/:id',
                    loadComponent: () => import('./admin/invoices/invoice-edit/invoice-edit.component').then(m => m.InvoiceEditComponent)
                  }
              ]
            },
            
            
];
