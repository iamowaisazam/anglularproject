import { Routes } from '@angular/router';
// import { InvoiceListComponent } from './invoice-list/invoice-list.component';
// import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
// import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';



export const routes: Routes = [

            {
              path:'',
              loadComponent: () => import('./invoice-list/invoice-list.component').then(m => m.InvoiceListComponent)
            },
            {
              path:'invoices-list',
              loadComponent: () => import('./invoice-list/invoice-list.component').then(m => m.InvoiceListComponent)
            },
            {
              path:'invoices-create',
              loadComponent: () => import('./invoice-create/invoice-create.component').then(m => m.InvoiceCreateComponent)
            },
            {
              path:'invoices-edit/:id',
              loadComponent: () => import('./invoice-edit/invoice-edit.component').then(m => m.InvoiceEditComponent)
            }
            
];
