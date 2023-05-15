import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  EnterButtonclickedStatus:boolean=false
  questions:any=[]
  CategoryForm=this.fb.group({
    category:[''],
    mode:['']
  })
constructor(private api:ApiService,private fb:FormBuilder,private router:Router){}
EnterQuestion(){
  if(this.CategoryForm.valid){
    let catName=this.CategoryForm.value.category
  let mode=this.CategoryForm.value.mode
  this.EnterButtonclickedStatus=true
  this.api.searchTerm.next({catName,mode})
  
    setTimeout(()=>{
      // const myModal = document.querySelector('#staticBackdrop'). // it is asynchronous

      this.router.navigateByUrl('quiz')
    },1000)
    
  }
  else{
    alert('select Category and mode')
  }
  
  
}
}


