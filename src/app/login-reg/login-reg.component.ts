import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent {
  RegisterSuccessmsg:string=''
  LoginSuccessmsg:string=''
  loginButtonClicked:boolean=false
  RegButtonClicked:boolean=false
  loginSuccess:boolean=false
  errMsg:string=''
  registerForm=this.registerFb.group({
    // array for form
    username:['',[Validators.required,Validators.pattern('[a-z A-Z0-9]*')]],
    email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

constructor(private registerFb:FormBuilder,private api:ApiService,private router:Router){}
register(){

  // if form has value
      if(this.registerForm.valid){
      let uname=this.registerForm.value.username
      let email=this.registerForm.value.email
      let pword=this.registerForm.value.password
      let score=localStorage.getItem("count")
      const body={uname,email,pword,score}
      
      this.api.register(uname,email,pword,score)
      .subscribe((result:any)=>{
        
       
        setTimeout(()=>{
          
          this.loginButtonClicked=true
          this.RegButtonClicked=true
          this.registerForm.reset()
        },2000)
      },((error:any)=>{
        
        
        this.errMsg=error.error

        console.log(this.errMsg);
        setTimeout(()=>{
          this.registerForm.reset()
          this.errMsg=''
        },2000)

      }))
    }
    // form dont have any value
    else{
      this.errMsg='Please enter details'
    }
}
loginButton(){
  this.loginButtonClicked=false
  this.RegButtonClicked=false
  this.registerForm.reset()


}
registerButton(){
  
  this.RegButtonClicked=true
  this.loginButtonClicked=true
  this.registerForm.reset()
}

Login(){
  
      let email=this.registerForm.value.email
      let pword=this.registerForm.value.password
      let score=localStorage.getItem("count")
      // let scoreN=JSON.parse(score)
      console.log(score);
      
      if(email&&pword){ 
      const body={email,pword,score}
      // api call
      this.api.login(email,pword,score)
      .subscribe((result:any)=>{
        // console.log("hi",result);

        // store to behaviour subject for data to another component
        this.api.resultArray.next({result})
        this.LoginSuccessmsg="Login Success"
        console.log(this.LoginSuccessmsg);
        this.loginSuccess=true
        setTimeout(()=>{
          this.router.navigateByUrl('/result')
          
        },2000)
      },((error:any)=>{
        
        
        this.errMsg=error.error
        console.log(this.errMsg);
        setTimeout(()=>{
          this.registerForm.reset()
          this.errMsg=''
        },2000)

      }))
    }
    // form dont have any value
    else{
      this.errMsg='Please enter details'
    }
}
    
}
