import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { HomeComponent } from './components/home/home.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';

export const routes: Routes = [
    {path : 'add-blog', component:AddBlogComponent},
    {path : 'login', component:LoginComponent},
    {path : 'register', component:RegisterComponent},
    {path : 'blog/:id', component:BlogViewComponent },
    {path : '', component:HomeComponent },
    {path : '**', component:NotfoundComponent}
];
