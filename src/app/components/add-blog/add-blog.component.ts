import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent {

  /**
   *
   */
  constructor(private blogService:BlogService,public authService:AuthService) {
    
 
  }

  ngOnInit(){
    console.log('====================================');
    console.log(this.authService.getAuthId());
    console.log('====================================');
  }

  username = new FormControl("",[
    Validators.required,
  ])

  title = new FormControl("",[
    Validators.required,
     Validators.minLength(10),
  ])

  description = new FormControl("",[
    Validators.required,
    Validators.minLength(15),
  ])

  addBlogForm = new FormGroup({
    username:this.username,
    title:this.title,
    description:this.description
  })


 async submitForm(){

    let result:any = await this.blogService.createBlog(
        String(this.title.value),
        String(this.description.value),
        String(this.username.value)
      );
      
      alert('Blog Submited');

  }

  
}
