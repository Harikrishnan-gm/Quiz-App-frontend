import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{BehaviorSubject} from 'rxjs'
@Injectable({ 
  providedIn: 'root'
})
export class ApiService {
  searchTerm=new BehaviorSubject({})
  questions=new BehaviorSubject({})
  Base_Url='http://localhost:3000'
  constructor(private http:HttpClient)  {

   }
  Getquiz(catName:any,mode:any){
  let num=catName
   return this.http.get(` https://opentdb.com/api.php?amount=10&category=${num}&difficulty=${mode}  `)
                       
  }

  register(name:any,email:any,password:any){
    const body={name,email,password}
    return this.http.post(`${this.Base_Url}/users`,body)
  }

  login(email:any,password:any){
    const body={email,password}
    return this.http.post(`${this.Base_Url}/login`,body)
  }
  Topper(){
    return this.http.get(`${this.Base_Url}/topper`)
  }
}
