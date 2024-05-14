import { Injectable } from '@angular/core';
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc  } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
   private db?:any;

  constructor() { 
   this.db = getFirestore();
  }


 async createBlog(title:any,description:any,username:any){

  addDoc(collection(this.db, "blogs"), {
      title: title,
      description: description,
      username:username
    }).then((docRef:any) => {
      console.log('Document written with ID: ', docRef.id);

      return true;
    })
    .catch((error:any) => {
      return false;
      console.error('Error adding document: ', error);
    });
    
  }

  async getAllSnippet() {

    let result:any = []
    const querySnapshot = await getDocs(collection(this.db, "blogs"));
    querySnapshot.forEach((doc) => {
      
      let item:any = doc.data();  
      result.push({
        id:doc.id,
        title:item.title,
        description:item.description,
        username:item.username,
       })
    });

    return result

  }

  async getSnippetById(docId: string) {

    const docRef = doc(this.db, "blogs",docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      return {
        id:"1",
        title:"non found",
        code:"not found"
      }
    }
  }


}
