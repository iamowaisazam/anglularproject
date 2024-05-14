import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



 constructor(private blogService:BlogService,private router:Router) {

 }

  data:any = [];

 ngOnInit(){

   this.blogService.getAllSnippet().then((coll:any) => {
    
    this.data = coll;
    console.log('====================================');
    console.log(coll);
    console.log('====================================');

   }).catch((error:any) => {

   })

 }


}
