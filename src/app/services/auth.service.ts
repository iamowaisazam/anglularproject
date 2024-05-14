import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut ,onAuthStateChanged } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uid?:string


  constructor(private router:Router) { 

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      
        if (user) {
          this.uid = user.uid
      
          console.log("User logged in as",user.email)
        } else {
          this.uid = undefined
          console.log("User logged out")
        }

    });


  }

  // createProfile(name:any){

  //     this.firestore.collection('myCollection').add({
  //       // Add data to your collection
  //       field1: 'value1',
  //       field2: 'value2'
  //     })
  //     .then((docRef) => {
  //       console.log('Document written with ID: ', docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error);
  //     });

  // }

  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log({ user })
        alert('User Created');
        // this.router.navigate(['/'])
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Something went wrong while signup try again")
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
        alert('User logged in successfully');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Something went wrong while logging in. Please try again.");
      });
  }

  isAuth(){
    return this.uid ? true : false;
  }

  getAuthId(){
    return this.uid;
  }

  logout(){
    const auth = getAuth();
    signOut(auth).catch((error) => {
      alert("Something went wrong while logout")
    });
  }


}
