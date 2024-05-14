import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { initializeApp } from "firebase/app";
import firebaseConfig from '../../firebaseConfig';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(){
    initializeApp(firebaseConfig);



  }
  title = 'my-app';
}
