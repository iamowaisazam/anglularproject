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
              path: 'forgot',
              loadComponent: () => import('./forgot/forgot.component').then(m => m.ForgotComponent)
            },
            {
              path: 'register',
              loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
            },
            {
              path: 'Create an Account',
              loadComponent: () => import('./forgot/forgot.component').then(m => m.ForgotComponent)
            },
            {
              path:'admin',
              loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
              children:[
                  {
                    path:'dashboard',
                    loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
                  },
                  {
                    path:'profile',
                    loadComponent: () => import('./admin/profile/profile.component').then(m => m.ProfileComponent)
                  },
                  {
                    path:'property-list',
                    loadComponent: () => import('./admin/property/property-list/property-list.component').then(m => m.PropertyListComponent)
                  },
                  {
                    path:'property-create',
                    loadComponent: () => import('./admin/property/property-create/property-create.component').then(m => m.PropertyCreateComponent)
                  },
                  {
                    path:'property-edit/:id',
                    loadComponent: () => import('./admin/property/property-edit/property-edit.component').then(m => m.PropertyEditComponent)
                  },
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
